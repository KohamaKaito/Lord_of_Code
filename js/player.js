class Player{

    constructor(x, y, direction){
        this.x = x;
        this.y = y;
        this.direction = direction; 
        /*
        directionはプレイヤーの向いている方向を表す
        north : 0
        east : 1
        south : 2
        west : 3
        */
    }

    go_ahead(){
        switch(this.direction){
            case 0:
                this.y -= 1
            case 1:
                this.x += 1
            case 2:
                this.y += 1
            case 3:
                this.x -= 1
        }
    }

    turn_right(){
        if(this.direction == 3){
            this.direction = 0
        } else {
            this.direction += 1
        }
    }

    get_direction(){
        return this.direction
    }

    //テスト用のメソッド
    get_status(){
        console.log("現在の座標は[" + this.x + ", " + this.y + "]")
        switch(this.direction){
            case 0:
                console.log("北を向いてます")
            case 1:
                console.log("東を向いてます")
            case 2:
                console.log("南を向いてます")
            case 3:
                console.log("西を向いてます")
        }
    }
}