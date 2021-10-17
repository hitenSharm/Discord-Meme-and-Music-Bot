const Discord = require("discord.js");
const smartestchatbot = require("smartestchatbot");
const client = new smartestchatbot.Client();

module.exports = {
  name: "obtalk",
  description: "A smart ChatBot",
  async execute(msg, args) {
    await client
      .chat({
        message: `${args}`,
        name: "SmartestChatBot",
        user: msg.author.id,
        language: "en",
      })
      .then((reply) => {
        msg.reply(reply);
      });
  },
};
