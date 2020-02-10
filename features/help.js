//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^help$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.appendMention(message, "desk") + ": find the correct sku of the Webex Desk Series";
        text += "\n- " + bot.appendMention(message, "board") + ": find the correct sku of the Webex Board Series";
        text += "\n- " + bot.appendMention(message, "kit") + ": find the correct sku of the Webex Room Kit Series";
        text += "\n- " + bot.appendMention(message, "room") + ": find the correct sku of the Webex Room Series";
        text += "\n\nI also understand:";
        text += "\n- " + bot.appendMention(message, "about") + ": shows metadata about myself";
        text += "\n- " + bot.appendMention(message, "help") + ": spreads the word about my skills";
        text += "\n- " + bot.appendMention(message, "show [skill]") + ": display the code of the specified skill";
        bot.reply(message, text);
    });
}
