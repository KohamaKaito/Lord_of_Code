class ItemCountView {
    constructor(owned, needed, width, height) {
        let image = new PIXI.Texture.from("images/status.PNG");
        this.itemCountView = new PIXI.Sprite(image);
        this.itemCountView.width = width/3.7;
        this.itemCountView.height = width/7.4;
        this.itemCountView.x = width * 0.67;
        this.itemCountView.y = width * 0.8;


        this.textStyle = new PIXI.TextStyle({
            breakWords: true,
            fill: "white",
            fontFamily: "Press Start 2P",
            fontSize: this.itemCountView.width/12,
            lineHeight: 20,
        });
        this.owned_text = new PIXI.Text(owned, this.textStyle);
        this.needed_text = new PIXI.Text(needed, this.textStyle);
        this.needed_text.x = width * 0.875;
        this.needed_text.y = width * 0.836;
        this.owned_text.x = width * 0.875;
        this.owned_text.y = width * 0.877;
    }
    setNeeded(needed){
        this.needed_text.text = needed;
    }
    setOwned(owned){
        this.owned_text.text = this.owned_text.text = owned;
    }
}