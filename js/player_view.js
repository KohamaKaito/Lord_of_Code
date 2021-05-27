class PlayerView extends Object {

    // コンストラクタ
    constructor(canvas,src) {
        super();
        // playerの幅(canvas.width/7は1マス分)
        this.sizeX = canvas.width / 3;
        // playerの高さ(canvas.height/7は1マス分)
        this.sizeY = canvas.height / 3;
        // playerのx座標(初期位置3マス目に設定)
        this.x = canvas.width / 2.4;
        // playerのy座標(初期位置4マス目に設定)
        this.y = canvas.height / 3.1;
        // playerの画像を設定
        this.img = new Image();
        this.img.src = src;
        // コンテキストを設定
        this.cxt = canvas.getContext('2d');

        this.canvas = canvas;
    }

    // 向いてる方向に1マス分進ませる関数
    goAhead(direction){
        switch (direction){
            case 0:
                this.x -= canvas.width/14;
                this.y += canvas.height/28;
                break;
            case 1:
                this.x -= canvas.width/14;
                this.y -= canvas.height/28;
                break;
            case 2:
                this.x += canvas.width/14;
                this.y -= canvas.height/28;
                break;
            case 3:
                this.x += canvas.width/14;
                this.y += canvas.height/28;
                break;
        }
    }

    // player(Model)のdirectionに画像を対応させる関数
    turnRight(direction){
        switch (direction){
            case 0:
                this.img.src = "images/player1.png";
                break;
            case 1:
                this.img.src = "images/player4.png";
                break;
            case 2:
                this.img.src = "images/player3.png";
                break;
            case 3:
                this.img.src = "images/player2.png";
                break;
        }
    }


    // 画像を描画する関数(img, x座標, y座標, 画像の幅, 画像の高さ)
    draw(){
        canvas.getContext('2d').drawImage(this.img, this.x, this.y, this.sizeX, this.sizeY);
    }
}




