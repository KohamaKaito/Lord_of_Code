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
    /* controllerのblock_listにブロックの名前を返す（まっすぐボタン） */
    var block_name = 'go_ahead\n';
    return block_name;
    
}

Blockly.JavaScript['turn_right'] =  function(block) {
    /* controllerのblock_listにブロックの名前を返す（右向くボタン） */
    var block_name = 'turn_right\n';
    return block_name;
}

Blockly.JavaScript['pick_up'] =  function(block) {
    /* controllerのblock_listにブロックの名前を返す（拾うボタン） */
    //var block_name = '\n';
    //return block_name;
}