class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const distanceX = a.x - b.x;
        const distanceY = a.y - b.y;

        return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    };
}