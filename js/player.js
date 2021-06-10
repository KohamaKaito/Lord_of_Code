class Player{

    constructor(x, y, direction){
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.numItem = 0;
        /*
        directionはプレイヤーの向いている方向を表す
        north : 0
        east : 1
        south : 2
        west : 3
        */
    }

    goAhead(){
        switch(this.direction){
            case 0:
                this.y -= 1;
                break;
            case 1:
                this.x += 1;
                break;
            case 2:
                this.y += 1;
                break;
            case 3:
                this.x -= 1;
                break;
        }
    }

    turnRight(){
        if(this.direction == 3){
            this.direction = 0;
        } else {
            this.direction += 1;
        }
    }

    getDirection(){
        return this.direction;
    }

    //テスト用のメソッド
    getStatus(){
        console.log("現在の座標は[" + this.x + ", " + this.y + "]")
        switch(this.direction){
            case 0:
                console.log("北を向いてます");
                break;
            case 1:
                console.log("東を向いてます");
                break;
            case 2:
                console.log("南を向いてます");
                break;
            case 3:
                console.log("西を向いてます");
                break;
        }
    }

    pickUpItem(){
        this.numItem += 1;
    }
}