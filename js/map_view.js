class MapView extends Object {
    constructor(src) {
        super();
        this.img = new Image();
        this.img.src = src;
        this.x = 0;
        this.y = 0;
        this.move = 0;
    }

    draw_map(ctx, width, height){
        console.log("マップビュー")
        ctx.drawImage(this.img, this.x, this.y, width, height);
    }
}