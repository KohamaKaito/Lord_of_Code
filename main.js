const canvas = document.getElementById('mycanvas')
const renderer = new PIXI.Renderer({
    view: canvas,
    width: window.innerWidth,  // 追加
    height: window.innerHeight,  // 追加
})

const stage = new PIXI.Container()
const mediumFattyTunaTexture = PIXI.Texture.from('https://1.bp.blogspot.com/-B4qgopdczvI/X9ajxIVBXLI/AAAAAAABc0c/ZkI40HwecsMDfbaEBngoeh0pR0scrWTKQCNcBGAsYHQ/s800/amabie_omairi_hatsumoude.png')
const Button1 = PIXI.Texture.from('images/button01_play.png')
const sushi = new PIXI.Sprite(mediumFattyTunaTexture)
const button01 = new PIXI.Sprite(Button1)

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