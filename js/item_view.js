class ItemView extends Object {
    item;
    constructor(src, width, height) {
        super();
        let image = new PIXI.Texture.from(src);
        this.item = new PIXI.Sprite(image);
        this.item.x = width / 2.85;
        this.item.y = height / 1.75;
        this.item.width = width/8;
        this.item.height = height/8;
    }
}