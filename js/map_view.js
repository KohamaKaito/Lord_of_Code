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
        this.map.width = width;
        this.map.height = height;
    }

    // 画像を描画する関数(img, x座標, y座標, 画像の幅, 画像の高さ)
    draw(){
    }

}