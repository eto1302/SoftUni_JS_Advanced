let result = (function() {

    function add(vector1, vector2) {
        return [vector1[0] + vector2[0], vector1[1] + vector2[1]];
    }
    function multiply([x1, y1], multiplier) {
        return [(x1 * multiplier), (y1 * multiplier)];
    }
    function length([x1, y1]) {
        return Math.sqrt(x1 * x1 + y1 * y1);
    }
    function dot(vector1, vector2) {
        return vector1[0] * vector2[0] + vector1[1] * vector2[1];
    }
    function cross(vector1, vector2) {
        return vector1[0] * vector2[1] - vector1[1] * vector2[0];
    }
    return {add, multiply, length, dot, cross}
})();

result.add([1, 1], [1, 0]);