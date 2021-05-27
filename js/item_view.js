class ItemView {
    constructor(owned, needed) {
        this.textStyle = new PIXI.TextStyle({
            breakWords: true,
            fill: "Blue",
            fontFamily: "メイリオ",
            fontSize: 30,
            lineHeight: 20,
        });
        this.owned_text = new PIXI.Text("所持数: " + owned, this.textStyle);
        this.needed_text = new PIXI.Text("必要数: " + needed, this.textStyle);
        this.needed_text.x = 820;
        this.needed_text.y = 50;
        this.owned_text.x = 820;
        this.owned_text.y = 80;
    }
    setNeeded(needed){
        this.needed_text.text = "必要数: " + needed;
    }
    setOwned(owned){
        this.owned_text.text = this.owned_text.text = "所持数: " + owned;
    }
}