class PlayerView extends Object {

    // コンストラクタ
    player;
    app;
    constructor(app, src) {
        super();
        // playerの画像を設定
        let image = PIXI.Texture(src);
        this.player = PIXI.Sprite.from(image);
        // playerの幅(app.width/7は1マス分)
        this.sizeX = app.width / 7;
        // playerの高さ(app.height/7は1マス分)
        this.sizeY = app.height / 7;
        // playerのx座標(初期位置3マス目に設定)
        this.player.x = this.sizeX * 3;
        // playerのy座標(初期位置4マス目に設定)
        this.player.y = this.sizeY * 4;

        this.app = app;
    }

    // 向いてる方向に1マス分進ませる関数
    goAhead(direction){
        switch (direction){
            case 0:
                var point = this.y - this.app.height/7;
                while(this.y > point){
                    this.y -= 0.01;
                    this.draw();
                }
                break;
            case 1:
                this.x += this.app.width/7;
                break;
            case 2:
                this.y += this.app.height/7;
                break;
            case 3:
                this.x -= this.app.width/7;
                break;
        }
    }

    // player(Model)のdirectionに画像を対応させる関数
    turnRight(direction){
        // PIXIのアニメーションに置き換える
        /*
        switch (direction){
            case 0:
                this.img.src = "images/player_north.png";
                break;
            case 1:
                this.img.src = "images/player_east.png";
                break;
            case 2:
                this.img.src = "images/player_south.png";
                break;
            case 3:
                this.img.src = "images/player_west.png";
                break;
        }*/
    }


    // 画像を描画する関数(img, x座標, y座標, 画像の幅, 画像の高さ)
    draw(){
        //app.getContext('2d').drawImage(this.img, this.x, this.y, this.sizeX, this.sizeY);
    }
}




