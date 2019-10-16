let isOddOrEven = require('../EvenOrOdd.js');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('isOddOrEven', function(){
    it('should return undefined with a number parameter', function(){
        assert.equal(isOddOrEven(13), undefined, "Function did not return the correct result!");
    });

    it('should return undefined with an object parameter', function(){
        assert.equal(isOddOrEven({name:"John"}) ,undefined, "Function did not return the correct result!");
    });

    it('should return correct result with an even length', function(){
        assert.equal(isOddOrEven("roar"), "even", "Function did not return the correct result!")
    });

    it('should return correct result with an odd length', function(){
        assert.equal(isOddOrEven("Peter"), "odd", "Function did not return the correct result!")
    });

    it('should return correct value with multiple consecutive checks', function(){
        assert.equal(isOddOrEven("cat"), "odd", "Function did not return the correct result!");

        assert.equal(isOddOrEven("pet"), "odd", "Function did not return the correct result!")

        assert.equal(isOddOrEven("bird"), "even", "Function did not return the correct result!")
    });

})