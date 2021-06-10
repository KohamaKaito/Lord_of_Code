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

        this.direction = 0;
    }

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

    turnRight(stage){
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
}





