class MapView extends Object {
    constructor(src) {
        super();
        this.img = new Image();
        this.img.src = src;
        this.x = 0;
        this.y = 0;
        this.move = 0;
    }
}