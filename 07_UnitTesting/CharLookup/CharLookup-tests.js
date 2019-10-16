let lookupChar = require('../CharLookup.js');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('lookupChar', function(){
    it('should return undefined with a non-string first parameter', function(){
        assert.equal(lookupChar(13, 0), undefined, "The function did not return the correct result!");
    });

    it('should return undefined with a non-number second parameter', function(){
        assert.equal(lookupChar("Peter", "George"), undefined, "The function did not return the correct result!");
    });

    it('should return undefined with a floating-point number as a second parameter', function(){
        assert.equal(lookupChar("Peter", 3.12), undefined, "The function did not return the correct result!");
    });

    it('should return incorrect index with an incorrect index value', function(){
        assert.equal(lookupChar("George", 13), "Incorrect index", "The function did not return the correct result!");
    });

    it('should return incorrect index with a negative index value', function(){
        assert.equal(lookupChar("Peter", -1), "Incorrect index", "The function did not return the correct result!");
    });

    it('should return incorrect index with an index value equal to string length', function(){
        assert.equal(lookupChar("Peter", 5), "Incorrect index", "The function did not return the correct result!");
    });

    it('should return correct value with correct parameters', function(){
        assert.equal(lookupChar("Peter", 3), "e", "The function did not return the correct result!");
    });

    it('should return correct value with correct parameters', function(){
        assert.equal(lookupChar("George", 0), "G", "The function did not return the correct result!");
    });
})