class MapView extends Object {
    constructor(canvas, src) {
        super();
        this.img = new Image();
        this.img.src = src;
        this.canvas = canvas;
    }

    draw(){
        this.canvas.getContext( '2d' ).drawImage( this.img, 0, 0, window.innerWidth/2, window.innerHeight);
    }
}