//
// Example of a conversation with a menu that loops until explicitly stopped
//
module.exports = function (controller) {

    controller.hears([/^kit$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            var question = "Here is the list of all the Webex Room Kits:";
            question += "<br/> `1)` Room Kit Mini (**kitmini**)";
            question += "<br/> `2)` Room Kit (**kit**)";
            question += "<br/> `3)` Room Kit Plus (**kitplus**)";
            question += "<br/> `4)` Room Kit Pro (**kitpro**)";
            question += "<br/> `5)` Webex Share (**share**)";
            question += "\n\nOf which endpoint do you want me to retrieve the sku?<br/>_(type a number, a **bold keyword** or `stop`)_";
            convo.ask(question, [
                {
                    pattern: "^1|mini|kitmini$",
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
                    pattern: "^5|share$",
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
                text: "The sku for the Webex Share is **SPK-SHARE-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-share/datasheet-c78-741592.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/cisco-webex-share).",
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
