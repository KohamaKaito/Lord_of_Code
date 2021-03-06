class MapView extends Object {

    // コンストラクタ
    map;
    constructor(gameWindowWidth, gameWindowHeight,mapInfo, src1,src2) {
        super();
        this.ww = gameWindowWidth;
        this.wh = gameWindowHeight;
        this.map = [[0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        // canMove
        this.src1 = src1;
        // canNotMove
        this.src2 = src2;
        this.createMap(mapInfo, this.src1, this.src2);
    }



    // 画像を描画する関数(img, x座標, y座標, 画像の幅, 画像の高さ)
    getAddress(){

    }

    createMap(mapInfo, src1, src2){
        let image;
        for(let i=0; i<7; i++){
            for(let j=0; j<7; j++){
                switch (mapInfo[i][j]){
                    case 1:
                        image = new PIXI.Texture.from(src1);
                        break
                    case 2:
                        image = new PIXI.Texture.from(src2);
                        break
                    case 3:
                        image = new PIXI.Texture.from("images/item.png");
                        break
                }
                this.map[i][j] = new PIXI.Sprite(image);
                if(this.ww > this.wh){
                    this.map[i][j].x = this.wh*j/7;
                    this.map[i][j].y = this.wh*i/7;
                    this.map[i][j].width = this.wh/7;
                    this.map[i][j].height = this.wh/7;
                }else {
                    this.map[i][j].x = this.ww*j/7;
                    this.map[i][j].y = this.ww*i/7;
                    this.map[i][j].width = this.ww/7;
                    this.map[i][j].height = this.ww/7;
                }

            }
        }
    }
}