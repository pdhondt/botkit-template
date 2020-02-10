//
// Example of a conversation with a menu that loops until explicitly stopped
//
module.exports = function (controller) {

    controller.hears([/^board$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            var question = "Here is the list of all the Webex Boards:";
            question += "<br/> `1)` Webex Board 55 (**board55**)";
            question += "<br/> `2)` Webex Board 70 (**board70**)";
            question += "<br/> `3)` Webex Board 85 (**board85**)";
            question += "\n\nOf which endpoint do you want me to retrieve the sku?<br/>_(type a number, a **bold keyword** or `stop`)_";
            convo.ask(question, [
                {
                    pattern: "^1|board55$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_1');
                    },
                }
                , {
                    pattern: "^2|board70$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_2');
                    },
                }
                , {
                    pattern: "^3|board85$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_3');
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
                text: "The sku for the Webex Board 55 is **CS-BOARD55S-G-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-board/datasheet-c78-741939.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/webexboard55).",
                action: 'default'
            }, 'menu_1');

            // Menu option 2)
            convo.addMessage({
                text: "The sku for the Webex Board 70 is **CS-BOARD70S-G-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-board/datasheet-c78-741937.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/webexboard70s).",
                action: 'default'
            }, 'menu_2');

            // Menu option 3)
            convo.addMessage({
                text: "The sku for the Webex Board 85 is **CS-BOARD85S-G-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-board/datasheet-c78-741522.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/all-in-one-collaboration-device-for-wireless-presenting).",
                action: 'default'
            }, 'menu_3');

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
