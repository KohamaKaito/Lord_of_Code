class PlayerView extends Object {

    // コンストラクタ
    player;
    constructor(width, height, playerX, playerY) {
        super();
        this.playerX = width * playerX / 7;
        this.playerY = width * playerY / 7;

        this.anim0 = this.createAnim(["images/player0_0.png","images/player0_1.png","images/player0_0.png","images/player0_2.png"],width,height);
        this.anim1 = this.createAnim(["images/player1_0.png","images/player1_1.png","images/player1_0.png","images/player1_2.png"],width,height);
        this.anim2 = this.createAnim(["images/player2_0.png","images/player2_1.png","images/player2_0.png","images/player2_2.png"],width,height);
        this.anim3 = this.createAnim(["images/player3_0.png","images/player3_1.png","images/player3_0.png","images/player3_2.png"],width,height);

        this.clearAnim = this.createAnim(["images/goalAnim0_0.png","images/goalAnim0_1.png","images/goalAnim0_0.png"],width,height);

        // ループ中アニメーション開始を１回だけ行うため設定
        this.firstTime = true;
        // アニメーションのコマを記憶する変数
        this.count = 0;
        // 1回のgoAhead()で進む距離
        this.deltaX = width/700;
        this.deltaY = width/700;
        // goAhead()が完了したことを他のクラスに知らせる
        this.animFinished = false;
    }

    // 「前進」を命令する関数
    goAhead(direction,stage){
        if(this.count < 100){
            switch (direction){
                case 0:
                    this.startAnim(this.anim0);
                    this.playerY -= this.deltaY;
                    this.anim0.y = this.playerY;
                    break;
                case 1:
                    this.startAnim(this.anim1);
                    this.playerX += this.deltaX;
                    this.anim1.x = this.playerX;
                    break;
                case 2:
                    this.startAnim(this.anim2);
                    this.playerY += this.deltaY;
                    this.anim2.y = this.playerY;
                    break;
                case 3:
                    this.startAnim(this.anim3);
                    this.playerX -= this.deltaX;
                    this.anim3.x = this.playerX;
                    break;
            }
            this.count += 1;
        }else{
            switch (direction){
                case 0:
                    this.anim0.stop();
                    break;
                case 1:
                    this.anim1.stop();
                    break;
                case 2:
                    this.anim2.stop();
                    break;
                case 3:
                    this.anim3.stop();
                    break;
            }
            this.firstTime = true;
            this.count = 0;
            this.animFinished = true;
        }
    }


    // 「右を向く」を命令する関数
    turnRight(direction, stage){
        switch (direction){
            case 1:
                stage.removeChild(this.anim0);
                this.anim1.x = this.playerX
                this.anim1.y = this.playerY
                stage.addChild(this.anim1);
                break;
            case 2:
                stage.removeChild(this.anim1);
                this.anim2.x = this.playerX
                this.anim2.y = this.playerY
                stage.addChild(this.anim2);
                break;
            case 3:
                stage.removeChild(this.anim2);
                this.anim3.x = this.playerX
                this.anim3.y = this.playerY
                stage.addChild(this.anim3);
                break;
            case 0:
                stage.removeChild(this.anim3);
                this.anim0.x = this.playerX
                this.anim0.y = this.playerY
                stage.addChild(this.anim0);
                break;
        }
    }


    // animationを作成する関数
    createAnim(imgs, width, height) {
        const textureArray = [];
        for (let i = 0; i < imgs.length; i++) {
            let texture = PIXI.Texture.from(imgs[i]);
            textureArray.push(texture);
        }
        const animatedSprite = new PIXI.AnimatedSprite(textureArray);
        animatedSprite.animationSpeed = 0.1;
        animatedSprite.width = width/7;
        animatedSprite.height = width/7;
        animatedSprite.x = this.playerX;
        animatedSprite.y = this.playerY;
        return animatedSprite;
    }


    // アニメーションを開始させる関数
    startAnim(anim){
        if(this.firstTime){
            anim.play();
            this.firstTime = false;
        }
    }

    // ゴールアニメーション
    clearAnimation(stage){
        if(this.firstTime){
            if(stage.children.includes(this.anim0)) {
                stage.removeChild(this.anim0)
            } else if(stage.children.includes(this.anim1)){
                stage.removeChild(this.anim1)
            } else if(stage.children.includes(this.anim2)){
                stage.removeChild(this.anim2)
            } else if(stage.children.includes(this.anim3)){
                stage.removeChild(this.anim3)
            }
            this.clearAnim.x = this.playerX;
            this.clearAnim.y = this.playerY;
            this.clearAnim.play();
            stage.addChild(this.clearAnim);
            this.firstTime = false;
        }
        if(this.count < 100){
            this.count += 2;
        }else{
            this.firstTime = true;
            this.count = 0;
            this.animFinished = true;
        }
    }
}
