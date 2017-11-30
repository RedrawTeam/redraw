/* eslint-env node, mocha */
process.env.NODE_ENV = 'test';

// npm 
const chai = require('chai');

// local
const uploadImage = require('../docs/js/upload_image.js');

/* === Setup === */
const expect = chai.expect;
const assert = chai.assert;


describe('uploadImage', function() {
	it('should tell whether the image was uploaded', function() {
		
		var mockImage = {
			e: {
				target: {
					files: ["./assets/square.png"]
				}
			}
		}
		// console.log(mockImage);

	});
});