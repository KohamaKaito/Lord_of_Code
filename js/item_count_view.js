class ItemCountView {
    constructor(owned, needed, width, height) {
        this.textStyle = new PIXI.TextStyle({
            breakWords: true,
            fill: "Blue",
            fontFamily: "メイリオ",
            fontSize: 30,
            lineHeight: 20,
        });
        this.owned_text = new PIXI.Text("所持数: " + owned, this.textStyle);
        this.needed_text = new PIXI.Text("必要数: " + needed, this.textStyle);
        this.needed_text.x = width* 0.7;
        this.needed_text.y = height/20;
        this.owned_text.x = width * 0.7;
        this.owned_text.y = this.needed_text.y +40;
    }
    setNeeded(needed){
        this.needed_text.text = "必要数: " + needed;
    }
    setOwned(owned){
        this.owned_text.text = this.owned_text.text = "所持数: " + owned;
    }
}