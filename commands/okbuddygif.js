const sendgif = require("../botFunctions/fillGifs");

module.exports = {
  name: "obgif",
  description: "Sends gifs",
  async execute(msg, args) {
    var gif = await sendgif();
    msg.channel.send(gif);
    msg.reply(`*(delay: ${Date.now() - msg.createdAt}ms)*`);
  },
};
