var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var distanceFile = require ('../js/distance');

describe('distance', function (){
	it('should return 300km from Berlin to Hildesheim', function (){
		var berlin = {
			latitude: 52.5167,
			longitude: 13.3833
		};

		var hildesheim = {
			latitude: 52.1500,
			longitude: 9.9500
		};

		var distance = distanceFile.distanceCalculator.between(berlin, hildesheim);

		expect(distance).to.be.closeTo(236.8, 10);
	});

	it('should return 300km from Berlin to Oslo', function (){
		var berlin = {
			latitude: 52.5167,
			longitude: 13.3833
		};

		var oslo = {
			latitude: 59.9500,
			longitude: 10.7500
		};

		var distance = distanceFile.distanceCalculator.between(berlin, oslo);

		expect(distance).to.be.closeTo(838.01, 10);
	});

});

