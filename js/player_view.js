class PlayerView extends Object {

    // コンストラクタ
    player;
    constructor(src, width, height) {
        super();
        let image = new PIXI.Texture.from(src);
        this.player = new PIXI.Sprite(image);
        this.player.x = width / 2.5;
        this.player.y = height / 3.1;
        this.player.width = width/3;
        this.player.height = height/3;

        this.playerX = GameWindowWidth / 2.5;
        this.playerY = GameWindowHeight / 3.1;

        this.anim0 = this.createAnim(["images/player0_0.png","images/player0_1.png","images/player0_0.png","images/player0_2.png"]);
        this.anim1 = this.createAnim(["images/player1_0.png","images/player1_1.png","images/player1_0.png","images/player1_2.png"]);
        this.anim2 = this.createAnim(["images/player2_0.png","images/player2_1.png","images/player2_0.png","images/player2_2.png"]);
        this.anim3 = this.createAnim(["images/player3_0.png","images/player3_1.png","images/player3_0.png","images/player3_2.png"]);

        this.j = 0;
        this.i = 0;
        this.direction = 0;
    }


    // 向いてる方向に1マス分進ませる関数
    goAhead(){
        switch (this.direction){
            case 0:
                this.anim0.x -= this.anim0.width/14 * 0.02;
                this.playerX -= this.anim0.width/14 * 0.02;
                this.anim0.y += this.anim0.height/28 * 0.02;
                this.playerY += this.anim0.height/28 * 0.02;
                break
            case 1:
                this.anim1.x -= this.anim0.width/14 * 0.02;
                this.playerX -= this.anim0.width/14 * 0.02;
                this.anim1.y -= this.anim0.height/28 * 0.02;
                this.playerY -= this.anim0.height/28 * 0.02;
                break
            case 2:
                this.anim2.x += this.anim0.width/14 * 0.02;
                this.playerX += this.anim0.width/14 * 0.02;
                this.anim2.y -= this.anim0.height/28 * 0.02;
                this.playerY -= this.anim0.height/28 * 0.02;
                break
            case 3:
                this.anim3.x += this.anim0.width/14 * 0.02;
                this.playerX += this.anim0.width/14 * 0.02;
                this.anim3.y += this.anim0.height/28 * 0.02;
                this.playerY += this.anim0.height/28 * 0.02;
                break
        }
    }


    // player(Model)のdirectionに画像を対応させる関数
    image;
    turnRight(){
        //「右を向く」のアクション
        switch (this.direction){
            case 0:
                this.direction = 1;
                stage.removeChild(this.anim0);
                this.anim1.x = this.playerX
                this.anim1.y = this.playerY
                this.anim1.play();
                stage.addChild(this.anim1);
                break;
            case 1:
                this.direction = 2;
                stage.removeChild(this.anim1);
                this.anim2.x = this.playerX
                this.anim2.y = this.playerY
                this.anim2.play();
                stage.addChild(this.anim2);
                break;
            case 2:
                this.direction = 3;
                stage.removeChild(this.anim2);
                this.anim3.x = this.playerX
                this.anim3.y = this.playerY
                this.anim3.play();
                stage.addChild(this.anim3);
                break;
            case 3:
                this.direction = 0;
                stage.removeChild(this.anim3);
                this.anim0.x = this.playerX
                this.anim0.y = this.playerY
                this.anim0.play();
                stage.addChild(this.anim0);
                break;
        }
    }


    createAnim(imgs) {
        const textureArray = [];
        for (let i = 0; i < imgs.length; i++) {
            let texture = PIXI.Texture.from(imgs[i]);
            textureArray.push(texture);
        };
        const animatedSprite = new PIXI.AnimatedSprite(textureArray);
        animatedSprite.animationSpeed = 0.1;
        animatedSprite.height = GameWindowHeight/3;
        animatedSprite.width = GameWindowWidth/3;
        return animatedSprite;
    }


    // 画像を描画する関数(img, x座標, y座標, 画像の幅, 画像の高さ)
    draw(){
        //app.getContext('2d').drawImage(this.img, this.x, this.y, this.sizeX, this.sizeY);
    }

    reset(width,height){
        let image = new PIXI.Texture.from('images/player0_0.png');
        this.player = new PIXI.Sprite(image);
        this.player.x = width / 2.5;
        this.player.y = height / 3.1;
        this.player.width = width/3;
        this.player.height = height/3;
        stage.addChild(playerView.player);
    }
}





