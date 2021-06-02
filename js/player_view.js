class PlayerView extends Object {

    // コンストラクタ
    player;
    constructor(src, width, height) {
        super();
        // playerの画像を設定
        let image = new PIXI.Texture.from(src);
        this.player = new PIXI.Sprite(image);
        // playerの幅(app.width/7は1マス分)
        // this.sizeX = width/3;
        // playerの高さ(app.height/7は1マス分)
        // this.sizeY = height/3;
        // playerのx座標(初期位置3マス目に設定)
        this.player.x = width / 2.5;
        // playerのy座標(初期位置4マス目に設定)
        this.player.y = height / 3.1;
        this.player.width = width/3;
        this.player.height = height/3;
    }

    // 向いてる方向に1マス分進ませる関数
    goAhead(direction){
        switch (direction){
            case 0:
                this.x -= this.player.width/14;
                this.y += this.player.height/28;
                break;
            case 1:
                this.x -= this.player.width/14;
                this.y -= this.player.height/28;
                break;
            case 2:
                this.x += this.player.width/14;
                this.y -= this.player.height/28;
                break;
            case 3:
                this.x += this.player.width/14;
                this.y += this.player.height/28;
                break;
        }
    }



    // player(Model)のdirectionに画像を対応させる関数
    image;
    turnRight(direction){
        switch (direction){
            case 0:
                this.image = new PIXI.Texture.from("images/player4.png");
                this.player = new PIXI.Sprite(this.image);
                break;
            case 1:
                this.image = new PIXI.Texture.from("images/player3.png");
                this.player = new PIXI.Sprite(this.image);
                break;
            case 2:
                this.image = new PIXI.Texture.from("images/player2.png");
                this.player = new PIXI.Sprite(this.image);
                break;
            case 3:
                this.image = new PIXI.Texture.from("images/player1.png");
                this.player = new PIXI.Sprite(this.image);
                break;
        }
    }


    // 画像を描画する関数(img, x座標, y座標, 画像の幅, 画像の高さ)
    draw(){
        //app.getContext('2d').drawImage(this.img, this.x, this.y, this.sizeX, this.sizeY);
    }
}




