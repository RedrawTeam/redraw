"use strict";
/**
 * @module model_decompostion.js
 * Decomposition network. Loaded with TensorFire.
 * Neural network currently held off due to ongoing training and TensorFire wrangling.
 */

// Is this being run by client or by npm?
var isNode = (typeof global !== "undefined");

const DecomposeModel = {

	/*
		Load model from json dict files.
	*/
	loadModel() {
		// Interim model.
		console.log('Decomposition model loaded.');
		// throw new Error("Not implemented!");
	},

	/*
		Convert image into a tensor.
	*/
	imageToTensor(imageelement) {
		var i = new Image();

		i.onload = function() {
			tensor = new jsfeat.matrix_t(width, height, jsfeat.U8_t | jsfeat.C3_t);
		}
	},

	/*
		Convert image tensor to descriptive strokes.
	*/
	imageToStrokes(imageTensor) {
		throw new Error("Not implemented!");
	},

}

if (isNode) {
	module.exports = {
		DecomposeModel,
	}
}
