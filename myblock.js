Blockly.defineBlocksWithJsonArray(
    /* ここにJSONファイルの内容をコピー */
    [
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
        {
            "type": "turn_right",
            "message0": "右へ向く",
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 135,
            "tooltip": "",
            "helpUrl": ""
        }
    ]
);

Blockly.JavaScript['go_ahead'] =  function(block) {
    /* ここに実行したい処理を書く！！（まっすぐボタン） */
    var code = 'console.log("まっすぐ進む");\n';
    return code;
}

Blockly.JavaScript['turn_right'] =  function(block) {
    /* ここに実行したい処理を書く！！（右向くボタン） */
    var code = 'console.log("右へ向く");\n';
    return code;
}