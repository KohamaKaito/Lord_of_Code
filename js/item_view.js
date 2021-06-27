class ItemView extends Object {
    item;
    constructor(src, width, height, x, y) {
        super();
        let image = new PIXI.Texture.from(src);
        this.item = new PIXI.Sprite(image);
        this.item.x = width/7 * x;
        this.item.y = width/7 * y;
        this.item.width = width/7;
        this.item.height = width/7;
    }
}