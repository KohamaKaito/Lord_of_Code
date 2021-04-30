Blockly.defineBlocksWithJsonArray(
    /* ここにJSONファイルの内容をコピー */
    [{
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
            "type": "turn",
            "message0": "%1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "turn",
                    "options": [
                        [
                            "右へ向く",
                            "turn_right"
                        ],
                        [
                            "左を向く",
                            "turn_left"
                        ],
                        [
                            "",
                            ""
                        ]
                    ]
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        }]
);
Blockly.JavaScript['go_ahead'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['turn'] = function(block) {
    var dropdown_turn = block.getFieldValue('turn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};