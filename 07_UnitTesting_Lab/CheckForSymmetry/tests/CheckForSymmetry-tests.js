let isSymmetric = require("../CheckForSymmetry");

let expect = require("chai").expect;
let assert = require("chai").assert;

describe('isSymmetric', function () {
    it('isSymmetric test with symmetric elements', function () {
        let actual = isSymmetric([3, 1, 3]);
        assert.equal(actual, true);
    })
    it('isSymmetric test with asymmetric elements', function () {
        let actual = isSymmetric([1, 2]);
        assert.equal(actual, false);
    })
    it('isSymmetric test without array', function () {
        let actual = isSymmetric('wrong');
        assert.equal(actual, false);
    })
    it('isSymetric with symetric values #2', () => {
        const actual = isSymmetric([1, 2, 3, 2, 1]);
        assert.equal(actual, true);
    });

    it('symetric values with different types', () => {
        const actual = isSymmetric([[], 5, 'str', {}, true, {}, 'str', 5, []]);
        assert.equal(actual, true);
    })
})