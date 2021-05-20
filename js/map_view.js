class MapView extends Object {

    // コンストラクタ
    map;
    constructor(src, width, height) {
        super();
        // playerの画像を設定
        let image = new PIXI.Texture.from(src);
        this.map = new PIXI.Sprite(image);
        this.map.x = 0;
        this.map.y = 0;
    }

    // 画像を描画する関数(img, x座標, y座標, 画像の幅, 画像の高さ)
    draw(){
        //this.canvas.getContext('2d').drawImage(this.img, 0, 0, window.innerWidth / 2, window.innerHeight);
    }

    drawMap(ctx, width, height){
        //console.log("マップビュー")
        //ctx.drawImage(this.img, this.x, this.y, width, height);
    }
}