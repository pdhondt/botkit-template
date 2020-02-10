//
// Example of a conversation with a menu that loops until explicitly stopped
//
module.exports = function (controller) {

    controller.hears([/^desk$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            var question = "Here is the list of all the Webex Desk Series models:";
            question += "<br/> `1)` Webex DX80 (**dx80**)";
            question += "<br/> `2)` Webex Desk Pro (**deskpro**)";
            question += "\n\nOf which endpoint do you want me to retrieve the sku?<br/>_(type a number, a **bold keyword** or `stop`)_";
            convo.ask(question, [
                {
                    pattern: "^1|dx80$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_1');
                    },
                }
                , {
                    pattern: "^2|deskpro$",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_2');
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
                text: "The sku for the DX80 is **CP-DX80-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/desktop-collaboration-experience-dx600-series/datasheet-c78-731879.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/dx80).",
                action: 'default'
            }, 'menu_1');

            // Menu option 2)
            convo.addMessage({
                text: "The sku for the Desk Pro is **CS-DESKPRO-K9**. You can find the datasheet [here](https://www.cisco.com/c/en/us/products/collaboration-endpoints/webex-desk-pro/datasheet-c78-743105.html). More detailed information is available on [Project Workplace](https://projectworkplace.cisco.com/en-us/devices/cisco-webex-desk-pro).",
                action: 'default'
            }, 'menu_2');

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
