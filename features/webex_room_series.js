//
// Example of a conversation with a menu that loops until explicitly stopped
//
module.exports = function (controller) {

    controller.hears([/^room$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            var question = "Here is the list of all the Webex Room Series models:";
            question += "<br/> `1)` Room 55 Single (**room55s**)";
            question += "<br/> `2)` Room 55 Dual (**room55d**)";
            question += "<br/> `3)` Room 70 Single (**room70s**)";
            question += "<br/> `4)` Room 70 Dual (**room70d**)";
            question += "<br/> `5)` Room Panorama (**panorama**)";
            question += "\n\nOf which endpoint do you want me to retrieve the sku?<br/>_(type a number, a **bold keyword** or `stop`)_";
            convo.ask(question, [
                {
                    pattern: "^1|room55s$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_1');
                    },
                }
                , {
                    pattern: "^2|room55d$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_2');
                    },
                }
                , {
                    pattern: "^3|room70s$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_3');
                    },
                }
                , {
                    pattern: "^4|room70d$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_4');
                    },
                }
                , {
                    pattern: "^5|panorama$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_5');
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
                text: "The sku for the Room 55 Single is **CS-ROOM55-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/spark-room-series/datasheet-c78-739453.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/ciscowebexroom55).",
                action: 'default'
            }, 'menu_1');

            // Menu option 2)
            convo.addMessage({
                text: "The sku for the Room 55 Dual is **CS-ROOM55D-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-room-series/datasheet-c78-741051.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/ciscowebexroom55d).",
                action: 'default'
            }, 'menu_2');

            // Menu option 3)
            convo.addMessage({
                text: "The sku for the Room 70 Single is **CS-ROOM70SG2-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-room-series/datasheet-c78-741269.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/ciscowebexroom70s).",
                action: 'default'
            }, 'menu_3');

            // Menu option 4)
            convo.addMessage({
                text: "The sku for the Room 70 Dual is **CS-ROOM70DG2-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-room-series/datasheet-c78-741269.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/ciscowebexroom70).",
                action: 'default'
            }, 'menu_4');

            // Menu option 5)
            convo.addMessage({
                text: "The sku for the Room Panorama is **CS-ROOM-PANO-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/collaboration-room-endpoints/datasheet-c78-743064.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/cisco-webex-panorama).",
                action: 'default'
            }, 'menu_5');

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
