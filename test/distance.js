var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

if (typeof(Number.prototype.toRadians) === "undefined") {
  Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  };
}

var distanceCalculator = {
	between: function (cityOne, cityTwo) {

		var latOne = cityOne.latitude;
		var latTwo = cityTwo.latitude;
		var lonOne = cityOne.longitude;
		var lonTwo = cityTwo.longitude;

		var R = 6371; // km
		var phiOne = latOne.toRadians();
		var phiTwo = latTwo.toRadians();
		var deltaPhi = (latTwo-latOne).toRadians();
		var deltaLambda = (lonTwo-lonOne).toRadians();
		
		var a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
		        Math.cos(phiOne) * Math.cos(phiTwo) *
		        Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		
		var distance = R * c;
		return distance;
	}
};

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

		var distance = distanceCalculator.between(berlin, hildesheim);

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

		var distance = distanceCalculator.between(berlin, oslo);

		expect(distance).to.be.closeTo(838.01, 10);
	});

});