GS.dataCache['20047CED82D9664F912885F8DD2F79B3C1E8'] = {
    "uid": "20047CED82D9664F912885F8DD2F79B3C1E8",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Settings Menu",
        "type": "vn.scene",
        "parentId": "0680E2763533F740B54A6C139E537CF59C20",
        "chapterUid": "0680E2763533F740B54A6C139E537CF59C20",
        "order": 4,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.Comment",
                "params": {
                    "text": "In the scene we make our settings menu. We use an image-map to keep things simple. Feel free to use pictures, videos, hotspots, etc. to make it more dynamic.\n\nWe add hotspots on the image-map for ON/OFF like settings. Whenever a hotspot is clicked, a switch is turned ON/OFF and we jump to the approriate label to check the switches and use Set Game Data command to change the settings interally.\n\nFor each slider, we create an independent 20x23 pixel draggable hotspot. The track-rect covers the entire slider-area, means that the 20x23 pixel hotspot can be dragged only horizontal and cannot leave the left and right bounds of the slider. If a hotspot is draggable, we can store the position of the hotspot as a percentage in a variable. That percentage is 0% if the hotspot hits the left-edge of the track-rect and 100% if the hotspot hits the right-edge of the track-rect. For Example: For the Text Speed slider, we store the percentage in local number variable \"0001: Text Speed X\".\n\nWhenever the hotspot is dragged, we jump to the appropriate \"On Drag - XXX\" label and call the \"Update Slider\" common event. We pass the percentage value, the max. value of the settings as parameter so that common event can update the visual representation of the slider. That common event will also convert the percentage-value into the correct internal value and stores it into the global variable we pass as parameter. So after we called that common event, the global variable contains the correct internal value so we can use that variable as input for Set Game Data command. Check out \"Update Slider\" common event in database."
                },
                "indent": 0,
                "uid": "B20BF46E702E4341F35B29275CA1DCDE7DAB",
                "expanded": true
            },
            {
                "id": "gs.FreezeScreen",
                "params": {},
                "indent": 0,
                "uid": "0E7F2D8354B3924C5B7BE666B258F816571D"
            },
            {
                "id": "gs.ShowImageMap",
                "params": {
                    "number": 100,
                    "hotspots": [
                        {
                            "x": 0,
                            "y": 265,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 0,
                                "y": 265,
                                "width": 415,
                                "height": 64,
                                "action": 1,
                                "label": "back",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 415,
                                "height": 64
                            }
                        },
                        {
                            "x": 671,
                            "y": 248,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 671,
                                "y": 248,
                                "width": 45,
                                "height": 21,
                                "action": 1,
                                "label": "display_window",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Display - Window",
                                    "index": 0,
                                    "scope": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 45,
                                "height": 21
                            }
                        },
                        {
                            "x": 671,
                            "y": 198,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 671,
                                "y": 198,
                                "width": 45,
                                "height": 21,
                                "action": 1,
                                "label": "display_fullscreen",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Display - Fullscreen",
                                    "index": 1,
                                    "scope": 0,
                                    "domain": "com.degica.vnm.default"
                                },
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 45,
                                "height": 21
                            }
                        },
                        {
                            "x": 1554,
                            "y": 18,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1424,
                                "y": 344,
                                "width": 193,
                                "height": 51,
                                "action": 1,
                                "label": "skipmsg_all_msg",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Skip Msg - All Msg.",
                                    "index": 2,
                                    "scope": 0
                                },
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 193,
                                "height": 51
                            }
                        },
                        {
                            "x": 1346,
                            "y": 20,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1210,
                                "y": 342,
                                "width": 145,
                                "height": 49,
                                "action": 1,
                                "label": "skipmsg_seen_msg",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Skip Msg - Seen Msg.",
                                    "index": 3,
                                    "scope": 0
                                },
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 197,
                                "height": 49
                            }
                        },
                        {
                            "x": 1354,
                            "y": 72,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 605,
                                "y": 199,
                                "width": 197,
                                "height": 48,
                                "action": 1,
                                "label": "skip_choices",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Skip Choices",
                                    "index": 4,
                                    "scope": 0
                                },
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 197,
                                "height": 48
                            }
                        },
                        {
                            "x": 1556,
                            "y": 74,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 712,
                                "y": 200,
                                "width": 179,
                                "height": 46,
                                "action": 1,
                                "label": "skip_voices",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Skip Voices",
                                    "index": 5,
                                    "scope": 0
                                },
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 179,
                                "height": 46
                            }
                        },
                        {
                            "x": 1630,
                            "y": 970,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 456,
                                "y": 471,
                                "width": 275,
                                "height": 102,
                                "action": 1,
                                "label": "title",
                                "bindToSwitch": false,
                                "bindEnabledState": true,
                                "enabledSwitch": {
                                    "name": "In Game",
                                    "scope": 1,
                                    "index": 0,
                                    "changed": true,
                                    "domain": "com.degica.vnm.default"
                                },
                                "bindValueTo": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 275,
                                "height": 102
                            }
                        },
                        {
                            "x": 1524,
                            "y": 970,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 682,
                                "y": 471,
                                "width": 378,
                                "height": 100,
                                "action": 1,
                                "label": "reset_global",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 378,
                                "height": 100
                            }
                        },
                        {
                            "x": 0,
                            "y": 393,
                            "angle": 0,
                            "zoom": 0,
                            "horizontalFlip": false,
                            "data": {
                                "x": 0,
                                "y": 393,
                                "width": 415,
                                "height": 64,
                                "action": 1,
                                "label": "Save Menu",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": null,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 130
                            },
                            "size": {
                                "width": 415,
                                "height": 64
                            }
                        },
                        {
                            "x": 0,
                            "y": 329,
                            "angle": 0,
                            "zoom": 0,
                            "horizontalFlip": false,
                            "data": {
                                "x": 0,
                                "y": 329,
                                "width": 415,
                                "height": 64,
                                "action": 1,
                                "label": "Load Menu",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": null,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 130
                            },
                            "size": {
                                "width": 415,
                                "height": 64
                            }
                        },
                        {
                            "x": 0,
                            "y": 521,
                            "angle": 0,
                            "zoom": 0,
                            "horizontalFlip": false,
                            "data": {
                                "x": 0,
                                "y": 521,
                                "width": 415,
                                "height": 64,
                                "action": 1,
                                "label": "CG",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": null,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 130
                            },
                            "size": {
                                "width": 415,
                                "height": 64
                            }
                        },
                        {
                            "x": 0,
                            "y": 456,
                            "angle": 0,
                            "zoom": 0,
                            "horizontalFlip": false,
                            "data": {
                                "x": 0,
                                "y": 456,
                                "width": 415,
                                "height": 64,
                                "action": 1,
                                "label": "Settings",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": null,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 130
                            },
                            "size": {
                                "width": 415,
                                "height": 64
                            }
                        }
                    ],
                    "ground": {
                        "name": "settings_idle.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    },
                    "hover": {
                        "name": "Settings_select.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    },
                    "unselected": null,
                    "selected": {
                        "name": "Settings_Hover.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    },
                    "selectedHover": {
                        "name": "settings_hover.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    },
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "fieldFlags": {
                        "easing.type": 1,
                        "animation.type": 0,
                        "zOrder": 1,
                        "blendMode": 0,
                        "origin": 1
                    },
                    "blendMode": 0,
                    "zOrder": 0,
                    "numberDomain": "com.degica.vnm.default",
                    "predefinedPositionId": 0
                },
                "indent": 0,
                "expanded": true,
                "uid": "6B8039632E6606400968EDA71C17D9E02727"
            },
            {
                "id": "gs.GetInputData",
                "params": {
                    "field": 0,
                    "state": 0,
                    "targetVariable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "12D6D22237BD05464E59E9E7D937C5BDF785"
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "shape": "pixel",
                    "positionType": 0,
                    "actions": {
                        "onClick": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onEnter": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onSelect": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onDeselect": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onLeave": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onDrag": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "On Drag - Text Speed",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onDrop": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": null
                        },
                        "onDropReceive": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": null
                        }
                    },
                    "dragging": {
                        "enabled": 1,
                        "variable": {
                            "name": "Text Speed X",
                            "index": 0,
                            "scope": 0
                        },
                        "horizontal": 1,
                        "vertical": 1,
                        "rect": {
                            "x": 595,
                            "y": 430,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 817,
                                "y": 364,
                                "width": 280,
                                "height": 16,
                                "horizontalFlip": false,
                                "zoom": 1,
                                "angle": 0
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 550,
                                "height": 20
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 651,
                        "y": 429,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 651,
                            "y": 433,
                            "width": 8,
                            "height": 12,
                            "horizontalFlip": false,
                            "zoom": 1,
                            "angle": 0
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 8,
                            "height": 24
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "301561DA6FC4A84B785B06C7BAF3BA202CFA",
                "expanded": true
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 316,
                        "height": 23
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 649,
                        "y": 429,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "zoom": 1.19912902961612
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 0,
                        "animation.type": 0,
                        "zOrder": 0,
                        "blendMode": 0,
                        "visual.type": 0,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 0,
                        "size.type": 0,
                        "size.width": 0,
                        "size.height": 0,
                        "viewport.type": 0,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "slider_hover.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "BAA3CD021AB3C24AA509E6C5B1859002C78C",
                "expanded": true
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "shape": "rect",
                    "positionType": 1,
                    "actions": {
                        "onClick": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onEnter": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onSelect": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onDeselect": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onLeave": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onDrag": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "On Drag - Auto Speed",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onDrop": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": null
                        },
                        "onDropReceive": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": null
                        }
                    },
                    "dragging": {
                        "enabled": 1,
                        "variable": {
                            "name": "Auto Message X",
                            "index": 2,
                            "scope": 0
                        },
                        "horizontal": 1,
                        "vertical": 0,
                        "rect": {
                            "x": 1228,
                            "y": 598,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 614,
                                "y": 299,
                                "width": 418,
                                "height": 24,
                                "horizontalFlip": false,
                                "zoom": 1,
                                "angle": 0
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 418,
                                "height": 24
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 1227,
                        "y": 595,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1128,
                            "y": 364,
                            "width": 20,
                            "height": 16,
                            "horizontalFlip": false,
                            "zoom": 1,
                            "angle": 0
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 20,
                            "height": 16
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "number": 1,
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "77445C394DC9414E197900F234D81B496F63",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 1,
                        "width": 316,
                        "height": 23
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 1,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1227,
                        "y": 595,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 0,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 0,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 0,
                        "size.type": 0,
                        "size.width": 0,
                        "size.height": 0,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "slider_hover.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "30C9DADD2C47C849E18A3F8426215BB2A2D6",
                "expanded": true
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "shape": "rect",
                    "positionType": 1,
                    "actions": {
                        "onClick": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onEnter": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onSelect": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onDeselect": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onLeave": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onDrag": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "On Drag - BGM",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onDrop": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": null
                        },
                        "onDropReceive": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": null
                        }
                    },
                    "dragging": {
                        "enabled": 1,
                        "variable": {
                            "name": "BGM Volume X",
                            "index": 3,
                            "scope": 0
                        },
                        "horizontal": 1,
                        "vertical": 0,
                        "rect": {
                            "x": 1228,
                            "y": 738,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 614,
                                "y": 246,
                                "width": 420,
                                "height": 24,
                                "horizontalFlip": false,
                                "zoom": 1,
                                "angle": 0
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 420,
                                "height": 24
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 1227,
                        "y": 739,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1128,
                            "y": 539,
                            "width": 20,
                            "height": 23,
                            "horizontalFlip": false,
                            "zoom": 1,
                            "angle": 0
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 20,
                            "height": 23
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "number": 2,
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "2EA5080C2E06B7498C6BA8F7DB072F51A565",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 1,
                        "width": 316,
                        "height": 23
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 2,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1227,
                        "y": 739,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 0,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 0,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 0,
                        "size.type": 0,
                        "size.width": 0,
                        "size.height": 0,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "slider_hover.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "A3D06FDF78DC3049EA399B5598DC4F461499",
                "expanded": false
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "shape": "rect",
                    "positionType": 1,
                    "actions": {
                        "onClick": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onEnter": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onSelect": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onDeselect": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onLeave": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onDrag": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "On Drag - SFX",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onDrop": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": null
                        },
                        "onDropReceive": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": null
                        }
                    },
                    "dragging": {
                        "enabled": 1,
                        "variable": {
                            "name": "SE Volume X",
                            "index": 4,
                            "scope": 0
                        },
                        "horizontal": 1,
                        "vertical": 0,
                        "rect": {
                            "x": 1228,
                            "y": 792,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 614,
                                "y": 264,
                                "width": 420,
                                "height": 24,
                                "horizontalFlip": false,
                                "zoom": 1,
                                "angle": 0
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 420,
                                "height": 24
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 1227,
                        "y": 791,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1128,
                            "y": 604,
                            "width": 20,
                            "height": 23,
                            "horizontalFlip": false,
                            "zoom": 1,
                            "angle": 0
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 20,
                            "height": 23
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "number": 3,
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "48162A587632684BA01A26712D6C45F23A1B",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 1,
                        "width": 316,
                        "height": 23
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 3,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 1,
                    "positionType": 1,
                    "position": {
                        "x": 1227,
                        "y": 791,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 0,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 0,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 0,
                        "size.type": 0,
                        "size.width": 0,
                        "size.height": 0,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "slider_hover.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "AE78B50F48E731428C6AEAF0FF4F96A7F77D",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 3,
                    "blendMode": 0,
                    "zOrder": 0,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "origin": 0,
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "slider_hover2.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    }
                },
                "uid": "77D99BC460AA824DBD4972426AAB98FF8F30",
                "indent": 0
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "shape": "rect",
                    "positionType": 0,
                    "actions": {
                        "onClick": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onEnter": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onSelect": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onDeselect": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onLeave": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onDrag": {
                            "type": 0,
                            "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                            "label": "On Drag - Voice",
                            "switch": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onDrop": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": null
                        },
                        "onDropReceive": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": null
                        }
                    },
                    "dragging": {
                        "enabled": 1,
                        "variable": {
                            "name": "Voice Volume X",
                            "index": 5,
                            "scope": 0
                        },
                        "horizontal": 1,
                        "vertical": 0,
                        "rect": {
                            "x": 652,
                            "y": 756,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 614,
                                "y": 280,
                                "width": 420,
                                "height": 24,
                                "horizontalFlip": false,
                                "zoom": 1,
                                "angle": 0
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 499,
                                "height": 24
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 651,
                        "y": 757,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1128,
                            "y": 652,
                            "width": 20,
                            "height": 23,
                            "horizontalFlip": false,
                            "zoom": 1,
                            "angle": 0
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 8,
                            "height": 23
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "number": 4,
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "F49A1F595345B44C2529F5F426BBEFD3EB9F",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 4,
                    "blendMode": 0,
                    "zOrder": 0,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 372,
                        "y": 754,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "zoom": 1.2057892899157572
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "origin": 0,
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "slider_hover2.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    }
                },
                "uid": "A39706778E7D564D533A06992D872DE0CD0B",
                "indent": 0
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 1,
                        "width": 316,
                        "height": 23
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 4,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 1,
                    "positionType": 1,
                    "position": {
                        "x": 643,
                        "y": 755,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 651,
                            "y": 767,
                            "zoom": 1.2169526112767448,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 418,
                            "height": 23
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 0,
                        "animation.type": 0,
                        "zOrder": 0,
                        "blendMode": 0,
                        "visual.type": 0,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 0,
                        "size.type": 0,
                        "size.width": 0,
                        "size.height": 0,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "slider_hover.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "780D504A70ADF540951AA7558975E1D6674F",
                "expanded": false
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 0.06
                },
                "indent": 0,
                "uid": "F2C6081A2ACBB54CA46AB491EB65CFC9D478"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 19,
                    "targetVariable": {
                        "name": "Display - Fullscreen",
                        "index": 1,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "72B7E0167C37B243392AAC616DE47A92DDD1"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 19,
                    "targetVariable": {
                        "name": "Display - Window",
                        "index": 0,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "F3E78E0063F8D543BB7B901817B324D29F98"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "Display - Window",
                        "index": 0,
                        "scope": 0
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 2,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "374E8E26249D384EE938396527A37D22B0CC"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 9,
                    "targetVariable": {
                        "name": "Skip Msg - All Msg.",
                        "index": 2,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "C282926E29AF454B6D58B514745818DD0EC0"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 9,
                    "targetVariable": {
                        "name": "Skip Msg - Seen Msg.",
                        "index": 3,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "B3D5271922C2B34505381C33653D5611339B"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "Skip Msg - Seen Msg.",
                        "index": 3,
                        "scope": 0
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 2,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "0AAA95AE0FCE21450849D7380877E146D9E7"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 17,
                    "targetVariable": {
                        "name": "Continue Skipping",
                        "index": 4,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "31117EC5690F9649703810A3E6376EBA0294"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 18,
                    "targetVariable": {
                        "name": "Stop Skipping",
                        "index": 5,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "778755086811A948747AC5F34DA61DB00072"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 10,
                    "targetVariable": {
                        "name": "Text Speed X",
                        "index": 0,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "6741CDD426170843707812C75001FB75655F"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 12,
                    "targetVariable": {
                        "name": "Auto Message X",
                        "index": 2,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "E37352C37976774F61884ED8A7EBF07470C1"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 22,
                    "targetVariable": {
                        "name": "BGM Volume X",
                        "index": 3,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "EB8D65298CA6844E91285985795A126AF723"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 24,
                    "targetVariable": {
                        "name": "SE Volume X",
                        "index": 4,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "E236106C8837A74D465A19528F933422BB04"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 23,
                    "targetVariable": {
                        "name": "Voice Volume X",
                        "index": 5,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "5CFC6C117435D4432D1A863952C1F7950490"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Text Speed X",
                        "index": 0,
                        "scope": 0
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 3,
                    "source": 0,
                    "sourceValue": 25,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "sourceReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "0F5AFA364DD87647102945C89CEF602C7D53"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Auto Message X",
                        "index": 2,
                        "scope": 0
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 3,
                    "source": 0,
                    "sourceValue": 25,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "sourceReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "24E9FD4F4A84424B6958B9014EC6DF255712"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "Text Speed X",
                                "index": 0,
                                "scope": 0
                            },
                            0,
                            4,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "BED7F14E8B19054DF03987661BEF6D9C5FD6"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "Auto Message X",
                                "index": 2,
                                "scope": 0
                            },
                            1,
                            4,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "071F8DFD19F6064D653AEC56AA2183CEF4AE"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "BGM Volume X",
                                "index": 3,
                                "scope": 0
                            },
                            2,
                            100,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "46C7F27531B6674E278856427B53D8E824E0"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "SE Volume X",
                                "index": 4,
                                "scope": 0
                            },
                            3,
                            100,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "5A03E12918D8F54DFE6AD2B62723302DC21B"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "Voice Volume X",
                                "index": 5,
                                "scope": 0
                            },
                            4,
                            100,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "AA93EA991A1820480578A98198289B5EE88A"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 1.2
                },
                "indent": 0,
                "uid": "C3E2B55042B41249B83959E5EDCD74D4ED5F"
            },
            {
                "id": "gs.ScreenTransition",
                "params": {
                    "graphic": null,
                    "duration": 30,
                    "vague": 30,
                    "fieldFlags": {
                        "graphic": 1,
                        "vague": 1,
                        "duration": 0
                    }
                },
                "uid": "F6815A101913F64F0518A4324EF6B22A8C4E",
                "indent": 0
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "47292AAB3DBAA24B150985048C9C638CCFBA"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "back"
                },
                "indent": 0,
                "uid": "E17A511A4073B548ED9967A4968024A74F06"
            },
            {
                "id": "vn.ReturnToPreviousScene",
                "params": {},
                "indent": 0,
                "uid": "57D50C7E7B470049A569B7D02310A9D44CB8"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "uid": "3C31BBF55F9BB8423398D4E2AB4EBDCDEA7A",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Load Menu"
                },
                "uid": "C9E9FEBE4251854CD428A301BFAFEC4F52C3",
                "indent": 0
            },
            {
                "id": "vn.CallScene",
                "params": {
                    "scene": {
                        "uid": "E8023FF12DF3024AE35A80B7D3690BED05F3",
                        "name": "Load Menu"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "989ADFE4109BA842DB394152BA8190EA4263",
                "indent": 0
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "80223BA4725CE7430539BB170FD2525C6007"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Save Menu"
                },
                "uid": "37A470F47D8FA94FA818FEA53AEA0D667452",
                "indent": 0
            },
            {
                "id": "vn.CallScene",
                "params": {
                    "scene": {
                        "uid": "788F76F4231BE442882AEDA37BCF0AE6556B",
                        "name": "Save Menu"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "B27BC65F7C17C443063B0AB773DD5A045CB0",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Settings"
                },
                "uid": "E2BE96EC3455F14E380BEAF3F40C398F0149",
                "indent": 0
            },
            {
                "id": "vn.CallScene",
                "params": {
                    "scene": {
                        "uid": "20047CED82D9664F912885F8DD2F79B3C1E8",
                        "name": "Settings Menu"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "B6315CBE18066244538B52A6506B5480A6ED",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "CG"
                },
                "uid": "1E60052181A0354B044BF2C30DC646397EA8",
                "indent": 0
            },
            {
                "id": "vn.CallScene",
                "params": {
                    "scene": {
                        "uid": "83F3B6066A2EE444DD0AD086BF9D53D4A299",
                        "name": "CG Gallery"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "F641E5BA2A34944E2C59FE2136858C9BCF93",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot1"
                },
                "indent": 0,
                "uid": "C80DD3359C3CA5466B2945E8F591C6CF5244"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "3F9569EB57E28742652BE1D541D18B5605AA"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "6F0E9C2D77B91540D74A7568DBE89B0141D1"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "back"
                },
                "indent": 0,
                "uid": "1188736F548DA34FDA48EEE9806DA2EF8435"
            },
            {
                "id": "gs.SaveSettings",
                "params": {},
                "indent": 0,
                "uid": "082AD4346B1CD248D6699913879FDC9D2AAE"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "In Setting",
                        "index": 4,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "8CF70F288306C847141BA9293B6E1927FBCA"
            },
            {
                "id": "vn.ReturnToPreviousScene",
                "params": {},
                "indent": 0,
                "uid": "AD70A38143B0B14D562ACAF1F3AAC35A8AB7"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "1EB0CBD37D16F84D463B6772A85D433CF468"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "save"
                },
                "indent": 0,
                "uid": "5F2BF1741359644BE279306579D90BD945D9"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "788F76F4231BE442882AEDA37BCF0AE6556B",
                        "name": "Save Menu"
                    },
                    "duration": 20,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "savePrevious": 1
                },
                "indent": 0,
                "uid": "185BF80C8B24F8474A691782E9434E8D22D3",
                "expanded": false
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "18D761617DE4234C2E4AB3A3AE5E82ED3C7F"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "load"
                },
                "indent": 0,
                "uid": "A3B5E76342AF044FBE3973B79C0C917D8360"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "E8023FF12DF3024AE35A80B7D3690BED05F3",
                        "name": "Load Menu"
                    },
                    "duration": 20,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "savePrevious": 1
                },
                "indent": 0,
                "uid": "E155581C23E1A449AF7899732A7F5372AEAC"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "734EDAEC2608E54DAA2B41763CFE16AF7B1C"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "title"
                },
                "indent": 0,
                "uid": "80DE0FDD48698849358AF3C4C813CD4CD2A5"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "2379347586025344D738BEE5A39A37A44990",
                    "parameters": {
                        "values": [
                            "Graphics/Pictures/In-Game UI/Prompt_Quit.png",
                            "FDE10D61363F62471D2990437FBB8C1DBA5B",
                            0
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "E505B2153FCEE249150890593F2F53C05481"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "4997617001B6B74E00296224EEF27BCBBD6B"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "reset_global"
                },
                "indent": 0,
                "uid": "AF564D4C653ED1463F8A3637EEB915D5F1E9"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "2379347586025344D738BEE5A39A37A44990",
                    "parameters": {
                        "values": [
                            "Graphics/Pictures/In-Game UI/Prompt_Confirm_SaveLoad.png",
                            "7EE85C655388A944A87909421BAD5A565F5D",
                            0
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "25AE4F5125BD2445298B8178A0999CFA1DC1"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "675BC1397B024345813A9EE2F045129B065C"
            },
            {
                "id": "gs.Comment",
                "params": {
                    "text": "Here we Change the settings\n\n\n\n"
                },
                "indent": 0,
                "uid": "A854D6527D0C304BE77966A7CB6FC3E05363",
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "display_window"
                },
                "indent": 0,
                "uid": "1A6C28CE572AA248C619CC877B03CD2B8AF3"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "Display - Fullscreen",
                        "index": 1,
                        "scope": 0
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "C44F1EAE5765E7458E9BE838BEBE5EA24EF7"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 11,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "B766460D83FB9540D71B06B2DF2CA3CA4030"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "B1D1E2964824844D5B3B4912CF2E2A160116"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "display_fullscreen"
                },
                "indent": 0,
                "uid": "D880BD56335C63427128FC468DCA0305DCB6"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "Display - Window",
                        "index": 0,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "4CCCCE6F443EE7418F3BA432895652974064"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 11,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 1
                },
                "indent": 0,
                "uid": "0D73B4EE69FC814C2B0B6BD961881A8405B3"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "20BF569814A1E449F04BF7453F69EBA60743"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "skipmsg_all_msg"
                },
                "indent": 0,
                "uid": "8A9F712D69A699413459BA8606C7EFB82855"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "Skip Msg - Seen Msg.",
                        "index": 3,
                        "scope": 0
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "D5DA946E871D65472F1ABBD6F0DD7FCD3EB9"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 1,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 1
                },
                "indent": 0,
                "uid": "0A989B0910B301434D181084E83C69A832EB"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "771837C915E96946614A40B17A22B945D0DD"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "skipmsg_seen_msg"
                },
                "indent": 0,
                "uid": "6238FCFB62A4F246F95A430449B24162C209"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "Skip Msg - All Msg.",
                        "index": 2,
                        "scope": 0
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "3AA798A72554734CA64BE3F4FA9FA7D68296"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 1,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "1944A91C7455F4466778C6B2796E212FB4A9"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "0236DE9888BB164A8108588237EEA8979F27"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "skip_voices"
                },
                "indent": 0,
                "uid": "121F7E2856E8C44F058A2878A75500D0F01E"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 10,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": {
                        "name": "Skip Voices",
                        "index": 5,
                        "scope": 0
                    }
                },
                "indent": 0,
                "uid": "5E7EEB0B45BE1443EE6892D4898C64D8D74B"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "64F49E8F1CCCA34092585610AA11723F0642"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "skip_choices"
                },
                "indent": 0,
                "uid": "0F6AB29F870B8344A95AFEF31A0256BA130F"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 9,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": {
                        "name": "Skip Choices",
                        "index": 4,
                        "scope": 0
                    }
                },
                "indent": 0,
                "uid": "7ECB99BD6968964ECC3B9CE239CD023607CD"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "8727D48F044106450178C193DFAB5B60CE47"
            },
            {
                "id": "gs.Comment",
                "params": {
                    "text": "Here we handle the slider updates\n\n\n\n"
                },
                "indent": 0,
                "uid": "A5D1CAD42A5FC74EB77964532EB65EBCCB59",
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "On Drag - Text Speed"
                },
                "indent": 0,
                "uid": "352F9C9D0417D74CC66AD125450AAFE7E768"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "Slider X",
                                "index": 0,
                                "scope": 0
                            },
                            0,
                            5,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "7BE4AC5A2499664EED8A43267953FED4DE82"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 2,
                    "numberValue": {
                        "name": "",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0,
                    "decimalValue": {
                        "name": "",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    }
                },
                "indent": 0,
                "uid": "37C23502143791416968B294634698C59486"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "0329F1118055B74B6F7AB916A8D5E002FDED"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "On Drag - Auto Speed"
                },
                "indent": 0,
                "uid": "4DA4FCDE6008914458792759C49FC3345CC4"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "Auto Message X",
                                "index": 2,
                                "scope": 0
                            },
                            1,
                            5,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "255E76A65F4BF74457881794004DB88A13E9"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 4,
                    "numberValue": {
                        "name": "",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "B9A1BAC31D8AF9440F7AF8D5CF6AFA551E4D"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "BC794D3455FEC14B611A70406E8CAF072ADC"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "On Drag - BGM"
                },
                "indent": 0,
                "uid": "07D4EECE3A29C6495C5BAFD2D78B8287D8FA"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "BGM Volume X",
                                "index": 3,
                                "scope": 0
                            },
                            2,
                            100,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "2821799021CB464EEC3A5C24C00CBA26D512"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 14,
                    "numberValue": {
                        "name": "",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "193CF83E5428D840328BF2C82CEEE590F419"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "FE02438A2CB1D644861828A8EC79387E06F7"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "On Drag - SFX"
                },
                "indent": 0,
                "uid": "C6888DF693B3C247E12A4A2048BE9700EEBB"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "SE Volume X",
                                "index": 4,
                                "scope": 0
                            },
                            3,
                            100,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "1D2113526CA87344AA2BF2E81BCAC583CE3C"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 16,
                    "numberValue": {
                        "name": "",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "165DA45D75EC23406E0A68B6D09C073B483D"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "57383757166658438E7BBC0470E49E74B81F"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "On Drag - Voice"
                },
                "indent": 0,
                "uid": "9A58BCF74B25C2473E189D17D2BC8B9B1135"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C26C594D99C547420888BD65FE59F03AD507",
                    "parameters": {
                        "values": [
                            {
                                "name": "Voice Volume X",
                                "index": 5,
                                "scope": 0
                            },
                            4,
                            100,
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "1DD0F0965C47B243EF4942834B2E6AC8536B"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 15,
                    "numberValue": {
                        "name": "",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "B11F4C0D7C27E948332AB063E8DDB9C90989"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "62DCEA9A0C19F54C2D5B10D4AB3A58507C75"
            }
        ],
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "Display - Window",
                "index": 0,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "Display - Fullscreen",
                "index": 1,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "Skip Msg - All Msg.",
                "index": 2,
                "scope": 0
            },
            {
                "name": "Skip Msg - Seen Msg.",
                "index": 3,
                "scope": 0
            },
            {
                "name": "Skip Choices",
                "index": 4,
                "scope": 0
            },
            {
                "name": "Skip Voices",
                "index": 5,
                "scope": 0
            },
            {
                "name": "In Game",
                "index": 6,
                "scope": 0
            }
        ],
        "numberVariables": [
            {
                "name": "Text Speed X",
                "index": 0,
                "scope": 0
            },
            {
                "name": "Message Speed",
                "index": 1,
                "scope": 0
            },
            {
                "name": "Auto Message X",
                "index": 2,
                "scope": 0
            },
            {
                "name": "BGM Volume X",
                "index": 3,
                "scope": 0
            },
            {
                "name": "SE Volume X",
                "index": 4,
                "scope": 0
            },
            {
                "name": "Voice Volume X",
                "index": 5,
                "scope": 0
            }
        ],
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}