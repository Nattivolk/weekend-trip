var _ = require('lodash');
var capitals = require('../resources/country-capitals');

function whereInTheWorldIs(cityName) {
	
	var city = _.find(capitals, {CapitalName: cityName});
	return {
		latitude: Number(city.CapitalLatitude), 
		longitude: Number(city.CapitalLongitude)};

};

exports.whereInTheWorldIs = whereInTheWorldIs;
