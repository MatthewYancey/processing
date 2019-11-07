import os
import pandas as pd

with open(os.getcwd() + '/wall_art10/YanceyGould.ged', 'r') as f:
    text = f.readlines()

res = []
# lines that start with 0 are the begining of a record
given_name = ''
sur_name = ''
sex = ''
birth_date = ''
death_date = ''
place = ''

for i, line in enumerate(text):
    if line[0] == '0':

        # appends the results
        person = [given_name, sur_name, sex, birth_date, death_date, place]
        person = [p.strip() for p in person]
        res.append(person)

        # wipe all person info
        given_name = ''
        sur_name = ''
        sex = ''
        birth_date = ''
        death_date = ''
        place = ''


    # first and last name
    if line[:6] == '2 GIVN':
        given_name = line.replace('2 GIVN ', '')

    if line[:6] == '2 SURN':
        sur_name = line.replace('2 SURN ', '')

    # gender
    if line[:5] == '1 SEX':
        sex = line.replace('1 SEX ', '')
    
    # birthdate
    if line[:6] == '1 BIRT':
        birth_date = text[i + 1].replace('2 DATE ', '')

    # deathdate
    if line[:6] == '1 DEAT':
        death_date = text[i + 1].replace('2 DATE ', '')

    # birthplace
    if line[:6] == '2 PLAC':
        place = line.replace('2 PLAC ', '')

# converts it to a dataframe
df_res = pd.DataFrame(res)
df_res.columns = ['first_name', 'last_name', 'sex', 'birth_date', 'death_date', 'place']

# last name place
place_list = ['england', 'states', 'germany', 'denmark', 'australia']
df_res['country'] = ''
for place in place_list:
    for i, row in df_res.iterrows():
        if place in row['place'].lower():
            df_res.loc[i, 'country'] = place

df_res.to_csv(os.getcwd() + '/wall_art07/temp.csv', index=False)

# filters only where we have a name
df_res = df_res.loc[df_res['first_name'] != '', :]

# gets just the year
df_res['birth_year'] = df_res['birth_date'].str[-5:]
df_res['death_year'] = df_res['death_date'].str[-5:]

print(df_res.shape)
# df_res = df_res.sample(1000)

# only want people where we have a birth year for
df_res['birth_year'] = pd.to_numeric(df_res['birth_year'], errors='coerse')
df_res['death_year'] = pd.to_numeric(df_res['death_year'], errors='coerse')
df_res = df_res.loc[df_res['birth_year'].notnull(), :]
df_res.loc[df_res['death_year'].isnull(), 'death_year'] = -1

js_vars = list(zip(df_res['birth_year'].tolist(),
                 df_res['death_year'].tolist(),
                 df_res['first_name'],
                 df_res['country']))
js_vars = [list(d) for d in js_vars]


# makes the text
text = ''
for js_var in js_vars:
    text += '[' + str(js_var[0]) + ', ' + \
    str(js_var[1]) + ', ' + \
    '\'' + js_var[2].replace('\'', '') + '\',' + \
    '\'' + js_var[3] + '\'],'


text = 'var people = [' + text + ']'

with open(os.getcwd() + '/wall_art10/variables.js', 'w') as f:
    f.write(text)
