const Discord = require("discord.js");
const { Player } = require("discord-music-player");

//Music bot setup
const player = new Player(client, {
    leaveOnEmpty: false,
  });

  client.player=player;

module.exports = {
  name: "okplay",
  description: "Play Music",
  async execute(msg, args) {
    let guildQueue = client.player.getQueue(msg.guild.id);
    let queue = client.player.createQueue(msg.guild.id);
    await queue.join(msg.member.voice.channel);
    // console.log(args.join(' '));
    let song = await queue.play(args.join(' ')).catch(_ => {
      if(!guildQueue)
          queue.stop();
  });
  console.log(song);
  },
};
