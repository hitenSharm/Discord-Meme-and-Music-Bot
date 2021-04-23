const fillMemes = require("../botFunctions/fillmemes");
const Discord = require("discord.js");

module.exports = {
  name: "okbuddymeme",
  description: "Sends meme",
  async execute(msg, args) {
    var meme = await fillMemes();
    const embed = new Discord.RichEmbed()
      .setTitle(meme.title)
      .setImage(meme.image, 300, 300)
      .setFooter(`(delay: ${Date.now() - msg.createdAt}ms)` + " Bot by Tecno");
    msg.channel.send(embed);
  },
};
