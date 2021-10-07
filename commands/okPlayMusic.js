const Discord = require("discord.js");

module.exports = {
  name: "obm",
  description: "Work with Music",
  async execute(msg, args) {
    const guildQueue = client.player.getQueue(msg.guild.id);
    var cmd = args[0];
    args.shift();
    switch (cmd) {
      case "play":
        let queue = client.player.createQueue(msg.guild.id);
        await queue.join(msg.member.voice.channel);
        let song = await queue.play(args.join(" ")).catch((_) => {
          if (!guildQueue) queue.stop();
        });
        var embed = new Discord.MessageEmbed()
          .setTitle("Adding to queue")
          .setDescription(song.name)
          .setImage(song.thumbnail, 300, 300);
        msg.channel.send({ embeds: [embed] });
        break;
      case "stop":
        //try and catch 
        try {
          msg.member.voice.channel.members;
          guildQueue.stop();
        } catch (error) {          
          msg.reply(
            "Only the ones who hear the music may stop the music \n -Aristotle, probably"
          );
        }
        break;
      case "skip":
        guildQueue.skip();
        break;
      case "progress":
        const ProgressBar = guildQueue.createProgressBar();
        msg.reply(ProgressBar.prettier);
        break;
      case "pause":
        guildQueue.setPaused(true);
        break;
      case "resume":
        guildQueue.setPaused(false);
        break;
      default:
        break;
    }
  },
};
