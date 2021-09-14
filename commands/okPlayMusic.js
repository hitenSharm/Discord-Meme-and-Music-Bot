const Discord = require("discord.js");

module.exports = {
  name: "m",
  description: "Work with Music",
  async execute(msg, args) {
    const guildQueue = client.player.getQueue(msg.guild.id);
    var cmd=args[0];
    args.shift();
    switch (cmd) {
      case "play":
        let queue = client.player.createQueue(msg.guild.id);
        await queue.join(msg.member.voice.channel);
        let song = await queue.play(args.join(" ")).catch((_) => {
          if (!guildQueue) queue.stop();
        });
        break;
      case "stop":
        guildQueue.stop();
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
      default:
        break;
    }
  },
};
