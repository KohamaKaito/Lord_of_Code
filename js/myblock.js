Blockly.defineBlocksWithJsonArray(
    /* ここにJSONファイルの内容をコピー */
    [
        /* まっすぐ進むボタン */
        {
        "type": "go_ahead",
        "message0": "まっすぐ進む",
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
        },
        /* 右へ向くボタン */
        {
            "type": "turn_right",
            "message0": "右へ向く",
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 135,
            "tooltip": "",
            "helpUrl": ""
        },
        /* 拾うボタン */
        {
            "type": "pick_up",
            "message0": "ひろう",
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 45,
            "tooltip": "",
            "helpUrl": ""
        }
    ]
);

Blockly.JavaScript['go_ahead'] =  function(block) {
    /* ここに実行したい処理を書く！！（まっすぐボタン） */
    var code = 'gameController.goPlayer()\n';
    code += 'gameController.whichAction()\n';
    return code;
}

Blockly.JavaScript['turn_right'] =  function(block) {
    /* ここに実行したい処理を書く！！（右向くボタン） */
    var code = 'gameController.turnPlayer()\n';
    return code;
}

Blockly.JavaScript['pick_up'] =  function(block) {
    /* ここに実行したい処理を書く！！（拾うボタン） */
    //var code = '\n';
    //return code;
}