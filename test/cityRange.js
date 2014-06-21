var chai = require('chai');
var assert = chai.assert;
var citiesWithinRangeOf = require('../js/cityRange').citiesWithinRangeOf;


describe('range', function (){
	it('paris should be within 900km of berlin', function (){

		var result = citiesWithinRangeOf('Berlin', 900);

		assert.include(result, 'Paris');
		assert.notInclude(result, 'Brasilia');
	});
});

