class PlayerView extends Object {
    constructor(canvas,src) {
        super();
        this.size_x = canvas.width / 7
        this.size_y = canvas.height / 7;
        this.x = this.size_x * 3;
        this.y = this.size_y * 4;
        this.img = new Image();
        this.img.src = src;
        this.move = 0;
        this.direction = 1;
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
        }
    }

    draw(){
        canvas.getContext( '2d' ).drawImage( this.img, this.x, this.y, this.size_x, this.size_y);
    }
}




