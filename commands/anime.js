const animeFinder = require("../botFunctions/animeFinder");
const Discord = require("discord.js");

module.exports = {
  name: "anime",
  description: "find anime",
  async execute(msg, args) {
    var temp = msg.attachments;
    temp.forEach(async (element) => {
      var url = element.url;
      var ans = await animeFinder(url);
      var episode = ans.episode.toString();
      var similarity = (ans.similarity * 100).toString();
      const embed = new Discord.RichEmbed()
        .setTitle(ans.title_english)
        .setDescription(
          "Episode : " + episode + " Similarity : " + similarity + "%"
        )
        .setFooter(
          `(Time taken: ${(Date.now() - msg.createdAt) / 1000} Seconds)` +
            " Bot by Tecno"
        );
      msg.reply(embed);
    });
  },
};
