class PlayerView extends Object {
    constructor(src) {
        super();
        this.img = new Image();
        this.img.src = src;
        this.x = 100;
        this.y = 100;
        this.move = 0;
        this.direction = 1;
    }

    go_ahead(){
        switch (this.direction){
            case 1:
                this.y -= canvas.height/7;
                break;
            case 2:
                this.x += canvas.width/7;
                break;
            case 3:
                this.y += canvas.height/7;
                break;
            case 4:
                this.x -= canvas.width/7;
                break;
        }
    }

    turn_right(){
        switch (this.direction){
            case 1:
                this.img.src = "images/player_east.png";
                this.direction = 2;
                break;
            case 2:
                this.img.src = "images/player_south.png";
                this.direction = 3;
                break;
            case 3:
                this.img.src = "images/player_west.png";
                this.direction = 4;
                break;
            case 4:
                this.img.src = "images/player_north.png";
                this.direction = 1;
                break;
        }
    }

    sleep(waitMsec) {
        var startMsec = new Date();

        // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
        while (new Date() - startMsec < waitMsec);
    }
}




