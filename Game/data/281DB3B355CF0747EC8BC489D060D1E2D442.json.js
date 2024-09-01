GS.dataCache['281DB3B355CF0747EC8BC489D060D1E2D442'] = {
    "uid": "281DB3B355CF0747EC8BC489D060D1E2D442",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Toggle Auto Message",
        "type": "data_record",
        "order": 8,
        "category": "commonEvents",
        "id": "281DB3B355CF0747EC8BC489D060D1E2D442",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Toggle Auto Message",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "We call this common event whenever the user clicks on the \"Auto\" link in our message box. In that case, we get the current auto message setting and store it in a local switch \"Auto Message\". That switch will be ON if the Auto Message is already enabled or OFF if it's disabled. After that we toggle that local switch, means if the switch is ON it becomes OFF and vice versa. With the last command, we set the current auto message setting to the value of our local switch.\n\nSo if this common event is called, Auto Message will be disabled if it was enabled before and vice versa."
                    },
                    "indent": 0,
                    "uid": "C028B5C73942304E9818D454AE315C4EF950",
                    "expanded": true
                },
                {
                    "id": "vn.SetGameData",
                    "params": {
                        "field": 3,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Toggle Auto",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        }
                    },
                    "indent": 0,
                    "uid": "3464BCAF798782477128A425DDC54C6404AA"
                }
            ],
            "index": "281DB3B355CF0747EC8BC489D060D1E2D442",
            "booleanVariables": [
                {
                    "name": "Auto Message",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "stringVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86"
        },
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}