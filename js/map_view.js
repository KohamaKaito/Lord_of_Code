class MapView extends Object {

    // コンストラクタ
    constructor(canvas, src) {
        super();
        // playerの画像を設定
        this.img = new Image();
        this.img.src = src;
        // canvasはhtmlとリンクしている
        this.canvas = canvas;
    }

    // 画像を描画する関数(img, x座標, y座標, 画像の幅, 画像の高さ)
    draw(){
        this.canvas.getContext( '2d' ).drawImage( this.img, 0, 0, window.innerWidth/2, window.innerHeight);
    }
}