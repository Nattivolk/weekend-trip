var capitals = require('../resources/country-capitals');
var whereInTheWorldIs = require('../js/cityPosition').whereInTheWorldIs;
var _ = require('lodash');
var distanceCalculator = require('../js/distance').distanceCalculator;


function citiesWithinRangeOf (city, distance){
	var start = whereInTheWorldIs(city);

	var citiesInRange = _.filter(capitals, function (capital) {

		var distanceBetweenStartAndCurrentCapital = distanceCalculator.between(start, {
			latitude: Number(capital.CapitalLatitude),
			longitude: Number(capital.CapitalLongitude)
		});

		return distance >= distanceBetweenStartAndCurrentCapital; 
	});
	return _.pluck(citiesInRange, 'CapitalName');
}


exports.citiesWithinRangeOf = citiesWithinRangeOf;