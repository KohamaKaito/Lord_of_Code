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
        },
        {
            "type": "if",
            "message0": "もし %1 なら， %2 そうでなければ， %3",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "num",
                    "options": [
                        [
                            "前に進める",
                            "0"
                        ],
                        [
                            "足元に宝箱",
                            "1"
                        ],
                        [
                            "",
                            ""
                        ]
                    ]
                },
                {
                    "type": "input_statement",
                    "name": "if"
                },
                {
                    "type": "input_statement",
                    "name": "else"
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 270,
            "tooltip": "",
            "helpUrl": ""
        }
    ]
);

Blockly.JavaScript['go_ahead'] =  function(block) {
    /* controllerのblock_listにブロックの名前を返す（まっすぐ） */
    let block_name = 'go_ahead\n';
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
    let number_number = block.getFieldValue('number');
    let statements_input = Blockly.JavaScript.statementToCode(block, 'input');
    let block_name = "";
    for(let i=0; i<number_number; i++){
        block_name += statements_input.trim() + "\n";
    }
    block_name = block_name.replace(/ /g, "");
    return block_name;
}

Blockly.JavaScript['if'] = function(block) {
    let dropdown_num = block.getFieldValue('num');
    let statements_if = Blockly.JavaScript.statementToCode(block, 'if');
    var statements_else = Blockly.JavaScript.statementToCode(block, 'else');
    let block_name = "";
    console.log(dropdown_num)
    switch (dropdown_num){
        case "0":
            block_name += "if0" + "\n"
            break
        case "1":
            block_name += "if1" + "\n"
            break
    }
    let count = 0;
    let ex = /\n/g;
    let arr = statements_if.match(ex);
    if (arr == null){
        count = 0;
    }else{
        count = arr.length;
    }
    block_name += count + "\n";
    block_name += statements_if.trim() + "\n";

    count = 0;
    arr = statements_else.match(ex);
    if (arr == null){
        count = 0;
    }else{
        count = arr.length;
    }
    block_name += "jump\n"
    block_name += count + "\n";
    block_name += statements_else.trim() + "\n";
    block_name = block_name.replace(/ /g, "");
    console.log("block_name="+block_name)
    return block_name;
};