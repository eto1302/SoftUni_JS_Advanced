let sum = require("../SumOfNumbers.js");

let expect = require("chai").expect;
let assert = require("chai").assert;

describe('sum', function () {
    it('Sum test with more than one elements', function () {
        let actual = sum([1, 2, 3]);
        assert.equal(actual, 6);
    })
    it('Sum test with one element', function () {
        let actual = sum([1]);
        assert.equal(actual, 1);
    })
    it('Sum test with zero elements', function () {
        let actual = sum([]);
        assert.equal(actual, 0);
    })
})