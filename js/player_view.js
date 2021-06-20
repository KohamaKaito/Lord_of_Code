class PlayerView extends Object {

    // コンストラクタ
    player;
    constructor(width, height) {
        super();
        this.playerX = width / 2.5;
        this.playerY = height / 3.1;

        this.player0 = this.createPlayer("images/player0_0.png",width,height);
        this.player1 = this.createPlayer("images/player1_0.png",width,height);
        this.player2 = this.createPlayer("images/player2_0.png",width,height);
        this.player3 = this.createPlayer("images/player3_0.png",width,height);

        this.anim0 = this.createAnim(["images/player0_0.png","images/player0_1.png","images/player0_0.png","images/player0_2.png"],width,height);
        this.anim1 = this.createAnim(["images/player1_0.png","images/player1_1.png","images/player1_0.png","images/player1_2.png"],width,height);
        this.anim2 = this.createAnim(["images/player2_0.png","images/player2_1.png","images/player2_0.png","images/player2_2.png"],width,height);
        this.anim3 = this.createAnim(["images/player3_0.png","images/player3_1.png","images/player3_0.png","images/player3_2.png"],width,height);

        // ループ中アニメーション開始を１回だけ行うため設定
        this.firstTime = true;
        // goAhead()の実行回数を記憶する変数
        this.countStep = 0;
        // 1回のgoAhead()で進む距離
        this.deltaX = width/42 * 0.02;
        this.deltaY = height/84 * 0.02;
        // goAhead()が完了したことを他のクラスに知らせる
        this.goFinished = false;
    }

    // 「前進」を命令する関数
    goAhead(direction,stage){
        if(this.countStep < 150){
            switch (direction){
                case 0:
                    this.startAnim(stage, this.player0, this.anim0);
                    this.playerX -= this.deltaX;
                    this.playerY += this.deltaY;
                    this.anim0.x = this.playerX;
                    this.anim0.y = this.playerY;
                    break;
                case 1:
                    this.startAnim(stage, this.player1, this.anim1);
                    this.playerX -= this.deltaX;
                    this.playerY -= this.deltaY;
                    this.anim1.x = this.playerX;
                    this.anim1.y = this.playerY;
                    break;
                case 2:
                    this.startAnim(stage, this.player2, this.anim2);
                    this.playerX += this.deltaX;
                    this.playerY -= this.deltaY;
                    this.anim2.x = this.playerX;
                    this.anim2.y = this.playerY;
                    break;
                case 3:
                    this.startAnim(stage, this.player3, this.anim3);
                    this.playerX += this.deltaX;
                    this.playerY += this.deltaY;
                    this.anim2.x = this.playerX;
                    this.anim2.y = this.playerY;
                    break;
            }
            this.countStep += 1;
        }else{
            switch (direction){
                case 0:
                    this.stopAnim(stage, this.player0, this.anim0);
                    break;
                case 1:
                    this.stopAnim(stage, this.player1, this.anim1);
                    break;
                case 2:
                    this.stopAnim(stage, this.player2, this.anim2);
                    break;
                case 3:
                    this.stopAnim(stage, this.player3, this.anim3);
                    break;
            }
            this.firstTime = true;
            this.countStep = 0;
            this.goFinished = true;
        }
    }


    // 「右を向く」を命令する関数
    turnRight(direction, stage){
        switch (direction){
            case 1:
                stage.removeChild(this.player0);
                this.player1.x = this.playerX
                this.player1.y = this.playerY
                stage.addChild(this.player1);
                break;
            case 2:
                stage.removeChild(this.player1);
                this.player2.x = this.playerX
                this.player2.y = this.playerY
                stage.addChild(this.player2);
                break;
            case 3:
                stage.removeChild(this.player2);
                this.player3.x = this.playerX
                this.player3.y = this.playerY
                stage.addChild(this.player3);
                break;
            case 0:
                stage.removeChild(this.player3);
                this.player0.x = this.playerX
                this.player0.y = this.playerY
                stage.addChild(this.player0);
                break;
        }
    }


    // プレイヤー(静的)を作成する関数
    createPlayer(src, width, height){
        let image = new PIXI.Texture.from(src);
        let player = new PIXI.Sprite(image);
        player.x = width / 2.5;
        player.y = height / 3.1;
        player.width = width/3;
        player.height = height/3;
        return player;
    }


    // プレイヤー(動的)を作成する関数
    createAnim(imgs, width, height) {
        const textureArray = [];
        for (let i = 0; i < imgs.length; i++) {
            let texture = PIXI.Texture.from(imgs[i]);
            textureArray.push(texture);
        };
        const animatedSprite = new PIXI.AnimatedSprite(textureArray);
        animatedSprite.animationSpeed = 0.1;
        animatedSprite.height = height/3;
        animatedSprite.width = width/3;
        return animatedSprite;
    }


    // アニメーションを開始させる関数
    startAnim(stage, player, anim){
        if(this.firstTime){
            stage.removeChild(player);
            anim.play();
            anim.x = this.playerX;
            anim.y = this.playerY;
            stage.addChild(anim);
            this.firstTime = false;
        }
    }


    // アニメーションを終了させる関数
    stopAnim(stage, player, anim){
        stage.removeChild(anim);
        player.x = this.playerX;
        player.y = this.playerY;
        stage.addChild(player);
    }
}
