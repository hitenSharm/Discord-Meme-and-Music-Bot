const Discord = require("discord.js");
const checkDeaf = require("../utils/boolDeaf");
const boolVC = require("../utils/boolVC");

//initializing
let queue = 0;
let song = 0;
let num = 0;

module.exports = {
  name: "obm",
  description: "Work with Music",
  async execute(msg, args) {
    const guildQueue = client.player.getQueue(msg.guild.id);
    var cmd = args[0];
    //checks if user is in VC AND if user is not deafened
    if (boolVC.checkVC(msg) && !checkDeaf(msg)) {
      args.shift();
      switch (cmd) {
        case "play":
          queue = client.player.createQueue(msg.guild.id);
          await queue.join(msg.member.voice.channel);
          //setting data -> skipCounts and userRequests
          //checks if user and bot are in the same channel
          if (boolVC.sameVC(msg)) {
            song = await queue.play(args.join(" ")).catch((_) => {
              if (!guildQueue) queue.stop();
            });
            song.setData({
              skipCounts: 0,
              userRequest: [],
            });
            var embed = new Discord.MessageEmbed()
              .setTitle("Adding to queue")
              .setDescription(song.name)
              .setImage(song.thumbnail, 300, 300);
            msg.channel.send({ embeds: [embed] });
          }
          break;
        case "stop":
          //checks if user and bot are in the same channel
          if (boolVC.sameVC(msg)) guildQueue.stop();
          break;
        case "skip":
          //checks if user and bot are in the same channel
          if (boolVC.sameVC(msg)) {
            msg.member.voice.channel.members.forEach(() => {
              num = num + 1;
            });
            //checks if user_id is repeating, if not adds skipCount and
            //appends user to userRequest
            if (!song.data.userRequest.includes(msg.author.id)) {
              song.data.skipCounts = song.data.skipCounts + 1;
              song.data.userRequest.push(msg.author.id);
              msg.reply(
                `\n\t ** ${song.data.skipCounts} / ${num - 1} ** want to skip`
              );
            }
            //prevents repeating requests
            else msg.reply("(≖᷆︵︣≖)👎");
            //checks if condition is satisfied
            if (song.data.skipCounts >= 0.5 * (num - 1)) guildQueue.skip();
          }
          break;
        case "progress":
          const ProgressBar = guildQueue.createProgressBar();
          //checks if user and bot are in the same channel
          if (boolVC.sameVC(msg)) msg.reply(ProgressBar.prettier);
          break;
        case "pause":
          //checks if user and bot are in the same channel
          if (boolVC.sameVC(msg)) guildQueue.setPaused(true);
          break;
        case "resume":
          //checks if user and bot are in the same channel
          if (boolVC.sameVC(msg)) guildQueue.setPaused(false);
          break;
        default:
          break;
      }
    }
  },
};
