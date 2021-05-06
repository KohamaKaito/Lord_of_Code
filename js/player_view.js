class PlayerView extends Object {
    constructor(src) {
        super();
        this.img = new Image();
        this.img.src = src;
        this.x = 100;
        this.y = 100;
        this.move = 0;
    }

    go_ahead(direction){
        switch (direction){
            case 0:
                this.y -= canvas.height/7;
                break;
            case 1:
                this.x += canvas.width/7;
                break;
            case 2:
                this.y += canvas.height/7;
                break;
            case 3:
                this.x -= canvas.width/7;
                break;
        }
    }

    turn_right(direction){
        switch (direction){
            case 0:
                this.img.src = "images/player_east.png";
                break;
            case 1:
                this.img.src = "images/player_south.png";
                break;
            case 2:
                this.img.src = "images/player_west.png";
                break;
            case 3:
                this.img.src = "images/player_north.png";
                break;
        }
    }

    draw_player(ctx, width, height){
        ctx.drawImage(this.img, this.x, this.y, width, height);
    }

    sleep(waitMsec) {
        var startMsec = new Date();

        // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
        while (new Date() - startMsec < waitMsec);
    }
}




