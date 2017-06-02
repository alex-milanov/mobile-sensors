'use strict';

const {obj} = require('iblokz-data');

// initial
const initial = {
	accel: {
		x: 0,
		y: 0,
		z: 0,
		timestamp: 0
	},
	gyro: {
		x: 0,
		y: 0,
		z: 0
	}
};

// actions
const toggle = path => state => obj.patch(state, path, !obj.sub(state, path));
const set = (path, value) => state => obj.patch(state, path, value);

module.exports = {
	initial,
	toggle,
	set
};
