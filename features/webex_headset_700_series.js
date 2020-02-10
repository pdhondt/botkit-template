//
// Example of a conversation with a menu that loops until explicitly stopped
//
module.exports = function (controller) {

    controller.hears([/^webex$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            var question = "Here is the list of all the Webex Endpoints:";
            question += "<br/> `1)` Room Kit Mini (**kitmini**)";
            question += "<br/> `2)` Room Kit (**kit**)";
            question += "<br/> `3)` Room Kit Plus (**kitplus**)";
            question += "<br/> `4)` Room Kit Pro (**kitpro**)";
            question += "<br/> `5)` Webex Board 55 (**board55**)";
            question += "<br/> `6)` Webex Board 70 (**board70**)";
            question += "<br/> `7)` Webex Board 85 (**board85**)";
            question += "<br/> `8)` Room 55 Single (**room55s**)";
            question += "<br/> `9)` Room 55 Dual (**room55d**)";
            question += "<br/> `10)` Room 70 Single (**room70s**)";
            question += "<br/> `11)` Room 70 Dual (**room70d**)";
            question += "<br/> `12)` Room Panorama (**panorama**)";
            question += "<br/> `13)` DX80 (**dx80**)";
            question += "<br/> `14)` Desk Pro (**deskpro**)";
            question += "<br/> `15)` Webex Share (**share**)";
            question += "\n\nOf which endpoint do you want me to retrieve the sku?<br/>_(type a number, a **bold keyword** or `stop`)_";
            convo.ask(question, [
                {
                    exact: "^1|mini|kitmini$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_1');
                    },
                }
                , {
                    pattern: "^2|kit$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_2');
                    },
                }
                , {
                    pattern: "^3|plus|kitplus$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_3');
                    },
                }
                , {
                    pattern: "^4|kitpro$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_4');
                    },
                }
                , {
                    pattern: "^5|board55$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_5');
                    },
                }
                , {
                    pattern: "^6|board70$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_6');
                    },
                }
                , {
                    pattern: "^7|board85$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_7');
                    },
                }
                , {
                    pattern: "^8|room55s$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_8');
                    },
                }
                , {
                    pattern: "^9|room55d$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_9');
                    },
                }
                , {
                    exact: "^10|room70s$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_10');
                    },
                }
                , {
                    pattern: "^11|room70d$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_11');
                    },
                }
                , {
                    pattern: "^12|panorama$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_12');
                    },
                }
                , {
                    pattern: "^13|dx80$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_13');
                    },
                }
                , {
                    pattern: "^14|deskpro$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_14');
                    },
                }
                , {
                    pattern: "^15|share$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_15');
                    },
                }
                , {
                    pattern: "cancel|stop",
                    callback: function (response, convo) {
                        convo.gotoThread('action_cancel');
                    },
                }
                , {
                    default: true,
                    callback: function (response, convo) {
                        convo.gotoThread('bad_response');
                    }
                }
            ]);

            // Menu option 1)
            convo.addMessage({
                text: "The sku for the Room Kit Mini is **CS-KIT-MINI-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-room-series/datasheet-c78-741523.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/cisco-webex-room-kit-mini).",
                action: 'default'
            }, 'menu_1');

            // Menu option 2)
            convo.addMessage({
                text: "The sku for the Room Kit is **CS-KIT-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/spark-room-kit-series/datasheet-c78-738729.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/webexroomkit).",
                action: 'default'
            }, 'menu_2');

            // Menu option 3)
            convo.addMessage({
                text: "The sku for the Room Kit Plus is **CS-KITPLUS-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/spark-room-kit-series/datasheet-c78-738752.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/webexroomkitplus).",
                action: 'default'
            }, 'menu_3');

            // Menu option 4)
            convo.addMessage({
                text: "The sku for the Room Kit Pro is **CS-KITPRO-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-room-series/datasheet-c78-741052.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/ciscowebexcodecpro).",
                action: 'default'
            }, 'menu_4');

            // Menu option 5)
            convo.addMessage({
                text: "The sku for the Webex Board 55 is **CS-BOARD55S-G-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-board/datasheet-c78-741939.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/webexboard55).",
                action: 'default'
            }, 'menu_5');

            // Menu option 6)
            convo.addMessage({
                text: "The sku for the Webex Board 70 is **CS-BOARD70S-G-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-board/datasheet-c78-741937.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/webexboard70s).",
                action: 'default'
            }, 'menu_6');

            // Menu option 7)
            convo.addMessage({
                text: "The sku for the Webex Board 85 is **CS-BOARD85S-G-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-board/datasheet-c78-741522.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/all-in-one-collaboration-device-for-wireless-presenting).",
                action: 'default'
            }, 'menu_7');

            // Menu option 8)
            convo.addMessage({
                text: "The sku for the Room 55 Single is **CS-ROOM55-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/spark-room-series/datasheet-c78-739453.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/ciscowebexroom55).",
                action: 'default'
            }, 'menu_8');

            // Menu option 9)
            convo.addMessage({
                text: "The sku for the Room 55 Dual is **CS-ROOM55D-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-room-series/datasheet-c78-741051.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/ciscowebexroom55d).",
                action: 'default'
            }, 'menu_9');

            // Menu option 10)
            convo.addMessage({
                text: "The sku for the Room 70 Single is **CS-ROOM70SG2-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-room-series/datasheet-c78-741269.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/ciscowebexroom70s).",
                action: 'default'
            }, 'menu_10');

            // Menu option 11)
            convo.addMessage({
                text: "The sku for the Room 70 Dual is **CS-ROOM70DG2-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-room-series/datasheet-c78-741269.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/ciscowebexroom70).",
                action: 'default'
            }, 'menu_11');

            // Menu option 12)
            convo.addMessage({
                text: "The sku for the Room Panorama is **CS-ROOM-PANO-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/collaboration-room-endpoints/datasheet-c78-743064.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/cisco-webex-panorama).",
                action: 'default'
            }, 'menu_12');

            // Menu option 13)
            convo.addMessage({
                text: "The sku for the DX80 is **CP-DX80-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/desktop-collaboration-experience-dx600-series/datasheet-c78-731879.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/dx80).",
                action: 'default'
            }, 'menu_13');

            // Menu option 14)
            convo.addMessage({
                text: "The sku for the Desk Pro is **CS-DESKPRO-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collaboration-endpoints/webex-desk-pro/datasheet-c78-743105.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/cisco-webex-desk-pro).",
                action: 'default'
            }, 'menu_14');

            // Menu option 15)
            convo.addMessage({
                text: "The sku for the Webex Share is **SPK-SHARE-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-share/datasheet-c78-741592.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/cisco-webex-share).",
                action: 'default'
            }, 'menu_15');

            // Cancel
            convo.addMessage({
                text: "Got it, cancelling...",
                action: 'stop', // this marks the converation as unsuccessful
            }, 'action_cancel');

            // Bad response
            convo.addMessage({
                text: "Sorry, I did not understand.",
                action: 'default',
            }, 'bad_response');

        });
    });
};
