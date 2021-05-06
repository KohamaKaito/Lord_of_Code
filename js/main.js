const canvas = document.getElementById('mycanvas')
const renderer = new PIXI.Renderer({
    view: canvas,
    width: window.innerWidth,
    height: window.innerHeight,
})

const stage = new PIXI.Container()
const mediumFattyTunaTexture = PIXI.Texture.from('https://1.bp.blogspot.com/-B4qgopdczvI/X9ajxIVBXLI/AAAAAAABc0c/ZkI40HwecsMDfbaEBngoeh0pR0scrWTKQCNcBGAsYHQ/s800/amabie_omairi_hatsumoude.png')
const Button1 = PIXI.Texture.from('images/button01_play.png')
const sushi = new PIXI.Sprite(mediumFattyTunaTexture)
const button01 = new PIXI.Sprite(Button1)

// クリック対象と実行される関数の追加
sushi.on('click', onClick)

// https://pixijs.download/dev/docs/PIXI.Sprite.html#interactive
// Enable interaction events for the DisplayObject. Touch, pointer and mouse events will not be emitted unless interactive is set to true.
sushi.interactive = true;

// カーソルを合わせたときにカーソルが変更する
sushi.buttonMode = true;

sushi.width = 200
sushi.height = 200

button01.width = 200
button01.height = 200

// 配置や回転に使用する原点を設定する
sushi.anchor.set(0.5)
button01.anchor.set(0.5)

// 配置座標を指定
sushi.x = renderer.width * 0.5
sushi.y = renderer.height * 0.5

button01.x = 100
button01.y = 100

// ステージに配置
stage.addChild(sushi)
stage.addChild(button01)

// ステージをレンダリング
renderer.render(stage)

function onClick(){
    console.log("click!!");
}