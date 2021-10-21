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
      const embed = {
          color: 0xf3ef00,
          url:"https://www.youtube.com/watch?v=0gct28UEKws",
          title: `dear @${msg.author.username}`,
          description:`**${reply}**`,
          thumbnail: {
            url: "https://i.imgur.com/5NqaxYO.jpeg",
          },
          footer: {
            text: "can't wait to be fully sentient",
            icon_url:"https://i.imgur.com/aKvbiRr.jpeg",
          },
        };
        msg.reply({ embeds: [embed] });
      });
  },
};
