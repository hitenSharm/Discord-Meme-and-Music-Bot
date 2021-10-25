const fillMemes = require("../botFunctions/fillmemes");
const Discord = require("discord.js");

module.exports = {
  name: "obmeme",
  description: "Sends meme",
  async execute(msg, args) {
     for(const arg of args) {
      var meme = await fillMemes(arg);
      const embed = new Discord.MessageEmbed()
        .setTitle(meme.title)
        .setImage(meme.image, 300, 300)
        .setFooter(
          `(delay: ${Date.now() - msg.createdAt}ms)` + " Bot by Tecno"
        );
      msg.channel.send({ embeds: [embed] });
    };
  },
};
