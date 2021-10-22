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
      var title = JSON.stringify(ans.result[0].anilist.title.english);
      var episode = ans.result[0].episode;
      var similarity = (ans.result[0].similarity) * 100;
      const embed = new Discord.MessageEmbed()
        .setTitle(title.replace(/\"/g, "")) //to remove doubel quotes
        .setDescription(
          "Episode : " + episode + " Similarity : " + similarity + "%"
        )
        .setFooter(
          `(Time taken: ${(Date.now() - msg.createdAt) / 1000} Seconds)` +
            " Bot by Tecno"
        );
        msg.channel.send({embeds:[embed]});
    });
  },
};
