'use strict';

// dom
const {div, section, p, button, span, h1, h2, h, i} = require('iblokz-snabbdom-helpers');

const controls = require('./controls');

module.exports = ({state, actions}) => section('.app', [
	h1('Mobile Sensors'),
	(state.accel) ? div([].concat(
		h2('Accelerometer'),
		Object.keys(state.accel).map(k => p(`${k}: ${state.accel[k]}`))
	)) : ''
]);
