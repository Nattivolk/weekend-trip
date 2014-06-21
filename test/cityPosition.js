var chai = require('chai');
var expect = chai.expect;

var whereInTheWorldIs = require('../js/cityPosition').whereInTheWorldIs;

describe('city', function(){
	it('should give the correct position of berlin', function (){
		var coordinatesOfBerlin = whereInTheWorldIs('Berlin');

		expect(coordinatesOfBerlin.latitude).to.be.closeTo(52.5167, 0.1);
		expect(coordinatesOfBerlin.longitude).to.be.closeTo(13.3833, 0.1);
	});
});
