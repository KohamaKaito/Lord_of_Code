Blockly.defineBlocksWithJsonArray(
    /* ここにJSONファイルの内容をコピー */
    [
        /* まっすぐ進むブロック */
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
        /* 右へ向くブロック */
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
        /* 拾うブロック */
        {
            "type": "pick_up",
            "message0": "ひろう",
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 45,
            "tooltip": "",
            "helpUrl": ""
        },
        /* forブロック */
        {
            "type": "for",
            "message0": "%1 回繰り返す %2",
            "args0": [
                {
                    "type": "field_number",
                    "name": "回繰り返す",
                    "value": 0,
                    "min": 0,
                    "max": 20
                },
                {
                    "type": "input_statement",
                    "name": "NAME"
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 20,
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
    let block_name = 'pick_up\n';
    return block_name;
}

Blockly.JavaScript['for'] =  function(block) {
    /* controllerのblock_listにブロックの名前を返す（forボタン） */
    //console.log("value="+Blockly.JavaScript['for'].type)
    let block_name = 'for\n';
    return block_name;
}