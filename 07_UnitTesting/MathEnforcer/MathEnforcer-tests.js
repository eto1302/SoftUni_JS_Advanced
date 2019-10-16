let mathEnforcer = require('../MathEnforcer.js');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return correct result with a non-number parameter', function () {
            let actual = mathEnforcer.addFive('John');
            expect(actual).to.be.equal(undefined);
        })

        it('should return correct result with a positive number parameter', function () {
            let actual = mathEnforcer.addFive(5);
            expect(actual).to.be.equal(10);
        })

        it('should return correct result with a negative number parameter', function () {
            let actual = mathEnforcer.addFive(-20);
            expect(actual).to.be.equal(-15);
        })
        
        it('should return correct result with a floating-point number parameter', function () {
            let actual = mathEnforcer.addFive(5.4);
            expect(actual).to.be.equal(10.4);
        })
    })


    describe('subtractTen', function () {
        it('should return correct result with a non-number parameter', function () {
            let actual = mathEnforcer.subtractTen('John');
            expect(actual).to.be.equal(undefined);
        })

        it('should return correct result with a positive number parameter', function () {
            let actual = mathEnforcer.subtractTen(24);
            expect(actual).to.be.equal(14);
        })

        it('should return correct result with a negative number parameter', function () {
            let actual = mathEnforcer.subtractTen(-6);
            expect(actual).to.be.equal(-16);
        })

        it('should return correct result with a floating-point number parameter', function () {
            let actual = mathEnforcer.subtractTen(5.4);
            expect(actual).to.be.equal(-4.6);
        })
    })


    describe('sum', function () {
        it('should return correct result with first non-number parameter', function () {
            let actual = mathEnforcer.sum('John', 5);
            expect(actual).to.be.equal(undefined);
        })

        it('should return correct result with second non-number parameter', function () {
            let actual = mathEnforcer.sum(1, 'John');
            expect(actual).to.be.equal(undefined);
        })

        it('should return correct result with a non-number parameter', function () {
            let actual = mathEnforcer.sum(1, 2);
            expect(actual).to.be.equal(3);
        })

        it('should return correct result with second non-number parameter', function () {
            let actual = mathEnforcer.sum(1, '5');
            expect(actual).to.be.equal(undefined);
        })

        it('should return correct result with  floating-point number parameters', function () {
            let actual = mathEnforcer.sum(5.4, 6.6);
            expect(actual).to.be.equal(12);
        })

    })
})