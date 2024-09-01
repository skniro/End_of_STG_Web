GS.dataCache['83F3B6066A2EE444DD0AD086BF9D53D4A299'] = {
    "uid": "83F3B6066A2EE444DD0AD086BF9D53D4A299",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "CG Gallery",
        "type": "vn.scene",
        "parentId": "0680E2763533F740B54A6C139E537CF59C20",
        "chapterUid": "0680E2763533F740B54A6C139E537CF59C20",
        "order": 3,
        "commands": [
            {
                "id": "gs.Comment",
                "params": {
                    "text": "In this scene we make our own CG Gallery! We use an image-map to keep things simple. Feel free to use pictures, videos, hotspots, etc. to make it more dynamic. We support 5 pages with 8 image-slots per page by default which makes 40 possible CGs in total. Feel free to add more! \n\nSince only 8 CGs can be visible at a time, we only need 8 different pictures. So we call \"Show Picture\" 8 times with a dummy image to make placement a little bit easier. That dummy image is replaced later with the cg-image of cg-slot. Just check out \"Show Gallery Thumb\" common event in database.\n\nIf the user clicks on one of the 8 cg-slots, we call the \"Show Gallery Image\" common event which shows the CG in full-size. We pass the current selected page and the number of the clicked cg-slot(1 - 8) to that common event so it can calculate the actual CG number. Just check out \"Show Gallery Image\" common event in database.\n\nIf the users clicks on one of the 5 page-numbers, we put the number of the clicked page into the local \"Page\" number variable. Then we  call the \"Update Pages\" common event, which makes sure that only one page is displayed as selected since image-map allows to select all hotspots independent from each other. Just check \"Update Pages\" common event in database. After that we jump to the \"Refresh Pictures\" label to call the \"Show Gallery Thumb\" common event again for each picture so that each pictures show the correct CG image for the selected page."
                },
                "indent": 0,
                "uid": "477DAB7E92C0E2406F2B7856784F81E8AA09",
                "expanded": true
            },
            {
                "id": "gs.FreezeScreen",
                "params": {},
                "indent": 0,
                "uid": "9741F8952616F3487D486618771274174FE1"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
                        "index": 1,
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
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 1,
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
                "uid": "769A717D7D1FD0499D191A745AEAF079F232"
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
                            "x": 1851,
                            "y": 117,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1851,
                                "y": 117,
                                "width": 69,
                                "height": 64,
                                "action": 1,
                                "label": "page1",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Page 1 ",
                                    "index": 0,
                                    "scope": 0
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
                                "width": 69,
                                "height": 64
                            }
                        },
                        {
                            "x": 1851,
                            "y": 202,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1851,
                                "y": 202,
                                "width": 69,
                                "height": 64,
                                "action": 1,
                                "label": "page2",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Backlog Opened",
                                    "index": 1,
                                    "scope": 1,
                                    "changed": true,
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
                                "width": 69,
                                "height": 64
                            }
                        },
                        {
                            "x": 1851,
                            "y": 287,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1851,
                                "y": 287,
                                "width": 69,
                                "height": 64,
                                "action": 1,
                                "label": "page3",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Page 3",
                                    "index": 2,
                                    "scope": 1,
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
                                "width": 69,
                                "height": 64
                            }
                        },
                        {
                            "x": 1851,
                            "y": 372,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1851,
                                "y": 372,
                                "width": 69,
                                "height": 64,
                                "action": 1,
                                "label": "page4",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Page 4",
                                    "index": 3,
                                    "scope": 1,
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
                                "width": 69,
                                "height": 64
                            }
                        },
                        {
                            "x": 1851,
                            "y": 457,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1851,
                                "y": 457,
                                "width": 69,
                                "height": 64,
                                "action": 1,
                                "label": "page5",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Page 5",
                                    "index": 4,
                                    "scope": 0
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
                                "width": 69,
                                "height": 64
                            }
                        },
                        {
                            "x": 759,
                            "y": 117,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 759,
                                "y": 117,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot1",
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
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 759,
                            "y": 304,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 759,
                                "y": 304,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot2",
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
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 759,
                            "y": 491,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 759,
                                "y": 491,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot3",
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
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 759,
                            "y": 676,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 759,
                                "y": 676,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot4",
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
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 1052,
                            "y": 117,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1052,
                                "y": 117,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot5",
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
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 1052,
                            "y": 304,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1052,
                                "y": 304,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot6",
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
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 1052,
                            "y": 676,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1052,
                                "y": 676,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot8",
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
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 1052,
                            "y": 491,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1052,
                                "y": 491,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot7",
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
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 1345,
                            "y": 117,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1345,
                                "y": 117,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot9",
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
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 130
                            },
                            "size": {
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 1345,
                            "y": 303,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1345,
                                "y": 303,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot10",
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
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 130
                            },
                            "size": {
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 1342,
                            "y": 491,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1342,
                                "y": 491,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot11",
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
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 130
                            },
                            "size": {
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 1342,
                            "y": 679,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1342,
                                "y": 679,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot12",
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
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 130
                            },
                            "size": {
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 0,
                            "y": 329,
                            "angle": 0,
                            "zoom": 1,
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
                                "zoom": 1,
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
                            "y": 457,
                            "angle": 0,
                            "zoom": 0,
                            "horizontalFlip": false,
                            "data": {
                                "x": 0,
                                "y": 457,
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
                        }
                    ],
                    "ground": {
                        "name": "CGGallery_Idle.png",
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
                        "name": "cggallery_hover.png",
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
                        "name": "cggallery_hover.png",
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
                        "name": "cggallery_hover.png",
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
                        "easing.type": 0,
                        "animation.type": 0,
                        "zOrder": 1,
                        "blendMode": 1,
                        "origin": 1
                    },
                    "zOrder": 0,
                    "blendMode": 0,
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "expanded": true,
                "uid": "E460F0EF8C473444C54932D46ACA0B95690A"
            },
            {
                "id": "gs.ShowPicture",
                "params": {
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
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 766,
                        "y": 123,
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
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "F54E3C291EE1D246D47A31C5845CAEC87A43",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
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
                    "number": 1,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 766,
                        "y": 311,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 580,
                            "y": 255,
                            "zoom": 1,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 259,
                            "height": 146
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
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "5EA3C5F07274244FEC6AFC9481B4F844FB4F",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
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
                    "number": 2,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 766,
                        "y": 497,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 920,
                            "y": 661,
                            "zoom": 1,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 217,
                            "height": 122
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
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "E147AC4548C3B54AF06AD747242F68FBD5ED",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
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
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 766,
                        "y": 683,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 920,
                            "y": 849,
                            "zoom": 1,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 166,
                            "height": 94
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
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "9C66D1F139486641681A75F724C93AED5DFB",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
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
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1058,
                        "y": 123,
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
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "863D59811627B446175B98F03F7340EC123A",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
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
                    "number": 5,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1058,
                        "y": 311,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1212,
                            "y": 477,
                            "zoom": 1,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 166,
                            "height": 94
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
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "43F3F9EF5619F14BC6683D18A1FDD3DAB7BA",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
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
                    "number": 6,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1058,
                        "y": 497,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1212,
                            "y": 661,
                            "zoom": 1,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 217,
                            "height": 122
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
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "CD3BA15E949CA34A018B0E14C3C6E3CF8CD9",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
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
                    "number": 7,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1058,
                        "y": 683,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1212,
                            "y": 850,
                            "zoom": 1,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 166,
                            "height": 94
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
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "B1C04FA45EE80049EE68ACF73A3FB49CE672",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
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
                    "number": 8,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1351,
                        "y": 123,
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
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "BD13962B226CC24642782AF0AEE8182DC66A",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
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
                    "number": 9,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1351,
                        "y": 309,
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
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "A5A326C87F63954524887B3720083B01B9A7",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
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
                    "number": 10,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1349,
                        "y": 498,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1503,
                            "y": 660,
                            "zoom": 1,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 166,
                            "height": 94
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
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "63285A7C16F9D64F8A4B550665DA52997ECC",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
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
                    "number": 11,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1349,
                        "y": 685,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1503,
                            "y": 847,
                            "zoom": 1,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 166,
                            "height": 94
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
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "CAE9617234B48448382A89420CEFDB57CDB9",
                "expanded": false
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Refresh Pictures"
                },
                "indent": 0,
                "uid": "3C181E4A85C095499F489D28CD3DC4FEE777"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "FABC971758BBE84B008B76966E726CE87EAE",
                    "parameters": {
                        "values": [
                            0,
                            1,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "8CDBE95A592FA34BC42A14322225E1E6BB1D"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "FABC971758BBE84B008B76966E726CE87EAE",
                    "parameters": {
                        "values": [
                            1,
                            2,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "3244499A76C6B94D4E4BC9D3E0BD44D89DBB"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "FABC971758BBE84B008B76966E726CE87EAE",
                    "parameters": {
                        "values": [
                            2,
                            3,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "CD0D8C8B37D8E94DA09B3F482BD8768AD4F6"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "FABC971758BBE84B008B76966E726CE87EAE",
                    "parameters": {
                        "values": [
                            3,
                            4,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "2C3266108FB06445C06AE486D417A4386FD7"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "FABC971758BBE84B008B76966E726CE87EAE",
                    "parameters": {
                        "values": [
                            4,
                            5,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "9F6E941B4E23D94F2F69B166CBE3F6DC37AA"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "FABC971758BBE84B008B76966E726CE87EAE",
                    "parameters": {
                        "values": [
                            5,
                            6,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "8ECC4B718F5AA5495D389426E31E5426693E"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "FABC971758BBE84B008B76966E726CE87EAE",
                    "parameters": {
                        "values": [
                            6,
                            7,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "6DCCAA551C4173420D18BF03E79259FFF6D6"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "FABC971758BBE84B008B76966E726CE87EAE",
                    "parameters": {
                        "values": [
                            7,
                            8,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "65AA2616333D5841DA6836F5BA3CE56F686D"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "FABC971758BBE84B008B76966E726CE87EAE",
                    "parameters": {
                        "values": [
                            8,
                            9,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "85B84F715C5071465529A58350D7CCB581C1"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "FABC971758BBE84B008B76966E726CE87EAE",
                    "parameters": {
                        "values": [
                            9,
                            10,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "1582F15B44E9E7417F6A7BE1A135F9482046"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "FABC971758BBE84B008B76966E726CE87EAE",
                    "parameters": {
                        "values": [
                            10,
                            11,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "156F46288DBCC6400C381BC22F57BFB84A4E"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "FABC971758BBE84B008B76966E726CE87EAE",
                    "parameters": {
                        "values": [
                            11,
                            12,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "7562643585D3F44E0A3B85C25B8F06282156"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 1.2
                },
                "indent": 0,
                "uid": "4A5138331469C042B0381C176E39C470F324"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {
                        "values": []
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "A7B78D5F5403D247081B2BA315FFDCA9FA56"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 1.2
                },
                "indent": 0,
                "uid": "C356C12137CE1147F54ABCE32D72104821E0"
            },
            {
                "id": "gs.ScreenTransition",
                "params": {
                    "graphic": null,
                    "duration": 0,
                    "vague": 30,
                    "fieldFlags": {
                        "graphic": 1,
                        "vague": 1,
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "B5DFC7BD2056214ED448D2059E729B5AE8A2"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "80E14573431B62427C192838C0477AB3E9A1"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "back"
                },
                "indent": 0,
                "uid": "E7D6B9F724CC634922898484AADD232EB7CF"
            },
            {
                "id": "vn.ReturnToPreviousScene",
                "params": {},
                "indent": 0,
                "uid": "B2CFF6889F4AF64D98892472A5EA344DE34C"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "uid": "BB7829E899D8C944379B6B36FF650E7C6833",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Load Menu"
                },
                "uid": "4F166413455165462959F4953F4D3B38CC84",
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
                "uid": "D9DA3FC93E01984ED05BD2070CA94C070FFE",
                "indent": 0
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "5B08423D45252445DD29ED175EB926E51044"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Save Menu"
                },
                "uid": "DA41C4341E6654412E78C9A14F8B758FF3A2",
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
                "uid": "BE51BC066900484CBE3B47C1D2DAC82A66FF",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Settings"
                },
                "uid": "B09D626D7001914D3C1BE6835B131B5F5FF1",
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
                "uid": "3437F4762EF3A2499A3B2BD3792B3D0680B1",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "CG"
                },
                "uid": "4A81AAB22F5D16456C3B2722027B4871B86D",
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
                "uid": "693CE6739D77E64B244A15A7FE79DB91EE43",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot1"
                },
                "indent": 0,
                "uid": "D8C8FD2F1C2204497268CFE708B59E637BE8"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "ADD4E8608B2DE54D0969F9946E3FCF5F13D9",
                    "parameters": {
                        "values": [
                            1,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "AC24F53A711C304B994BF051959572BD1E76"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "2A51F24F30A601488F483F7351CFEE325143"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot2"
                },
                "indent": 0,
                "uid": "6F1A43E2756A394A9658683155D0E90602E6"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "ADD4E8608B2DE54D0969F9946E3FCF5F13D9",
                    "parameters": {
                        "values": [
                            2,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "0403E5B42867A74C2B7A87F1E2CE9C4CB47B"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "7ED28D0227DF204788286340D342DD80DAF6"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot3"
                },
                "indent": 0,
                "uid": "BE9A270E79281347749BC8C6A7F277D755B6"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "ADD4E8608B2DE54D0969F9946E3FCF5F13D9",
                    "parameters": {
                        "values": [
                            3,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "7F99FC978405484ECA1A81B7DCF2EBC2040D"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "E84CE1DB112C6344234A34C2981B644BA601"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot4"
                },
                "indent": 0,
                "uid": "E06B313671B76048685A026101626D5203E8"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "ADD4E8608B2DE54D0969F9946E3FCF5F13D9",
                    "parameters": {
                        "values": [
                            4,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "B4A39B554D33F04E527875356825E165D5DF"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "B03C76918806A24BC88B2684D291F7A3270A"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot5"
                },
                "indent": 0,
                "uid": "57DB59958B03D449EF6B85B5600C0737FA49"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "ADD4E8608B2DE54D0969F9946E3FCF5F13D9",
                    "parameters": {
                        "values": [
                            5,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "323A0C0C4625834302582595F6DE23DBF028"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "A2CA7562515893488749B088B2723C255562"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot7"
                },
                "indent": 0,
                "uid": "3F4B0D3E157B214AFE998952352430EDFA35"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "ADD4E8608B2DE54D0969F9946E3FCF5F13D9",
                    "parameters": {
                        "values": [
                            7,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "1A5E0B772AE028400E582B9179803B1E9421"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "82DAD78E4537224F94485A88D741EB6B9558"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot8"
                },
                "indent": 0,
                "uid": "3538A19C83020748B2294E92BF3CB8F2E5AF"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "ADD4E8608B2DE54D0969F9946E3FCF5F13D9",
                    "parameters": {
                        "values": [
                            8,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "1B095ADB9E170240B96B5B2769BCEA70AE91"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "006F89671F19254B1D392DE1228B0D29BAF2"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot6"
                },
                "indent": 0,
                "uid": "89C1FE7F158BF64F0849F8211DDC197A76C0"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "ADD4E8608B2DE54D0969F9946E3FCF5F13D9",
                    "parameters": {
                        "values": [
                            6,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "161925DE36FD2746108811E815109D2828D2"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "9EAE44314EBA6747927B28A85A4A42FCA994"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot9"
                },
                "indent": 0,
                "uid": "0CAF28244862D2471F7858C8375D06751AC0"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "ADD4E8608B2DE54D0969F9946E3FCF5F13D9",
                    "parameters": {
                        "values": [
                            9,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "CF1C18013F2CD54D8929A7B3F3BF92EF59B3"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "B60CC8FE8E5A164F282A9F61C2D0EDD65197"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot10"
                },
                "indent": 0,
                "uid": "56EBB5A19549564440682893D8E6914BB772"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "ADD4E8608B2DE54D0969F9946E3FCF5F13D9",
                    "parameters": {
                        "values": [
                            10,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "5B9676195C16B54AC719A8A1E27153AF9FE7"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "DE5CD07323AF23461F8B16F9EF2EE68AAD9E"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot11"
                },
                "indent": 0,
                "uid": "9591524B7C238540CE2842028CAE91030A45"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "ADD4E8608B2DE54D0969F9946E3FCF5F13D9",
                    "parameters": {
                        "values": [
                            11,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "FE23B5244D04674B1778C259890AF4985557"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "1B9F513D49AE224D234BFE064E2782606F57"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot12"
                },
                "indent": 0,
                "uid": "52C5C8633775D14A378B5CF8B287CBADB5FA"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "ADD4E8608B2DE54D0969F9946E3FCF5F13D9",
                    "parameters": {
                        "values": [
                            12,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "4E376A854227E445DD987E898137C64E1FD1"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "5C19BD834C96F74A9B099B32FEA7EB1B4E66"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "page1"
                },
                "indent": 0,
                "uid": "202BA82E22FB37428159069646C254C7949B"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
                        "index": 1,
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
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 1,
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
                "uid": "2BF6C8EF328E034E7E287A45E1858B4A52F6"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {
                        "values": []
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "AA76A2864A1DA342552A6856CABE37247B94"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "3C3C8B8F1243E74FB1397629AFC113F71F79"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "page2"
                },
                "indent": 0,
                "uid": "74F3169323F5F440488AF12621EAAD999103"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
                        "index": 1,
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
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 2,
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
                "uid": "95A659567216B244521AE3F63C52BDF53F12"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {
                        "values": []
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "64132A3984C748458C7823098CA0601858B1"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "D866ABA767068343FE8B3F91C3C547043A11"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "page3"
                },
                "indent": 0,
                "uid": "FA9AB65643AFD14ADE189EB42A096AC74F89"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
                        "index": 1,
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
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 3,
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
                "uid": "857D0298431FB54DAE699E96A4D8DD3F9E43"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {
                        "values": []
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "3DA84E4B3EA37541935A8F7868E2A5E49C40"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "145A230412EB0744BA4B80492EBE887633EC"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "page4"
                },
                "indent": 0,
                "uid": "836CE2E7708B35433D2BCD908494DB9008D6"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
                        "index": 1,
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
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 4,
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
                "uid": "6666877E1D01D247AC5BF9E4C5DE3F13D34A"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {
                        "values": []
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "9508889867F9754ADD2BF11508BC64D8AA9D"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "8480F26D1002A9407D88A3641ACEB1A6AA50"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "page5"
                },
                "indent": 0,
                "uid": "023D0EB17BBBF1493D3966772A1270A0B6B8"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
                        "index": 1,
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
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 5,
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
                "uid": "FD229B5920A3434BBC1AA884A8E5B989E352"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {
                        "values": []
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "12FA92A837FB064B591850178CA92A0EAD90"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "4E7C439F749BB34B7498AF35F0BEF6B14A25"
            }
        ],
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "Page 1 ",
                "index": 0,
                "scope": 0
            },
            {
                "name": "Page 2",
                "index": 1,
                "scope": 1,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "Page 3",
                "index": 2,
                "scope": 1,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "Page 4",
                "index": 3,
                "scope": 1,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "Page 5",
                "index": 4,
                "scope": 0
            }
        ],
        "localizableStrings": {},
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            },
            {
                "name": "Page",
                "index": 1,
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
        "listVariables": [
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