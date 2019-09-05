
var n_m = 100;
var n_clouds = 3;

var m = [];
var clouds = [];
var sun;
var b_ground;

var m_speed = 1;
var sky_speed = 500;
var cloud_speed = 3;

var m_width = 500;
var mountain_padding = 100;
var sky_step = 0;

function setup() {
	b1_color = color(204, 72, 156);
	m_color = color(148, 149, 255);
	s_color = color(217, 88, 113)
	b1_color = [255, 0, 255];
	b2_color = [204, 142, 114];
	this_color = [0, 0, 0];

	createCanvas(640 * 2, 360 * 2);

	// creates the mountains
	for (var i = 0; i < n_m + 1; i++) {
		m[i] = new Mountains(((width + m_width + mountain_padding) / n_m) * i);
	}

	// creates the clouds
	for (var i = 0; i < n_clouds + 1; i++) {
		clouds[i] = new Cloud((width / n_clouds) * i);
	}

	// creates the sun
	sun = new Sun();

	// background
	b_ground = new B_ground();
}

function draw() {

	// updates the sky color
	this_color[0] = map(sky_step, 0, sky_speed, b1_color[0], b2_color[0]);
	this_color[1] = map(sky_step, 0, sky_speed, b1_color[1], b2_color[1]);
	this_color[2] = map(sky_step, 0, sky_speed, b1_color[2], b2_color[2]);
	background(this_color[0], this_color[1], this_color[2]);

	if (sky_step >= sky_speed) {
		sky_step = 0;
		var temp_color = b2_color;
		b2_color = b1_color;
		b1_color = temp_color;
	} else {
		sky_step = sky_step + 1;
	}

	// sun
	sun.update();

	// mountains 
	for (var i = 0; i < n_m; i++) {
		m[i].update();
	}

	// clouds
	for (var i = 0; i < n_clouds; i++){
		clouds[i].update();
	}

	// background
	b_ground.update();
}
