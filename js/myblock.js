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
                    "name": "number",
                    "value": 0
                },
                {
                    "type": "input_statement",
                    "name": "input"
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
    /* controllerのblock_listにブロックの名前を返す（まっすぐ） */
    var block_name = 'go_ahead\n';
    return block_name;
    
}

Blockly.JavaScript['turn_right'] =  function(block) {
    /* controllerのblock_listにブロックの名前を返す（右向く） */
    let block_name = 'turn_right\n';
    return block_name;
}

Blockly.JavaScript['pick_up'] =  function(block) {
    /* controllerのblock_listにブロックの名前を返す（拾う） */
    let block_name = 'pick_up\n';
    return block_name;
}

Blockly.JavaScript['for'] = function(block) {
    var number_number = block.getFieldValue('number');
    var statements_input = Blockly.JavaScript.statementToCode(block, 'input');
    var block_name ="";
    for(let i=0; i<number_number; i++){
        block_name += statements_input.trim() + "\n";
    }
    block_name = block_name.replace(/ /g, "");
    return block_name;
}