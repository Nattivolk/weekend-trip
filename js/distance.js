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

exports.distanceCalculator = distanceCalculator;