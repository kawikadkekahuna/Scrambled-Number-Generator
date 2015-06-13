var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var generator = require('./generator.js');

describe('Scrambled Number Generator', function () {
	var scramGen;
	before(function () {
		scramGen = new generator.Generator(10);		
	});

	it('should be a function', function () {
		generator.Generator.should.be.a('function');
	});

	it('should return an array', function () {
		scramGen.should.be.an("array");
	});

	it('should throw an error if an invalid argument was passed in', function () {
		expect(generator.Generator.bind(scramGen,'test')).to.throw("Invalid argument");
	});

	describe('Functionality', function () {
			
		it('should return an array with the length of the number being passed into it\'s parameters', function (done) {
			scramGen.length.should.equal(10);
		});

		});	

});