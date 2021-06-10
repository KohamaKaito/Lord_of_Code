class ItemView extends Object {
    item;
    constructor(src, width, height, x, y) {
        super();
        let image = new PIXI.Texture.from(src);
        this.item = new PIXI.Sprite(image);
        this.item.x = width / x;
        this.item.y = height / y;
        this.item.width = width/8;
        this.item.height = height/8;
    }
}