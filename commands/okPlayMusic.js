const Discord = require("discord.js");
const checkDeaf = require("../utils/boolDeaf");
const boolVC = require("../utils/boolVC");
const musicFunction = require("../botFunctions/musicFunction");

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
          //resolving promise
          musicFunction
            .playMusic(msg, args, guildQueue, queue)
            .then(function (result) {
              song = result;
            });
          break;
        case "stop":
          //checks if user and bot are in the same channel
          musicFunction.stopMusic(msg, guildQueue);
          break;
        case "skip":
          //checks if user and bot are in the same channel
          if (boolVC.sameVC(msg)) {
            musicFunction.skipMusic(msg, guildQueue, song);
          }
          break;
        case "progress":
          //checks if user and bot are in the same channel
          musicFunction.progressBar(msg, guildQueue);
          break;
        case "pause":
          //checks if user and bot are in the same channel
          musicFunction.pauseMusic(msg, guildQueue);
          break;
        case "resume":
          //checks if user and bot are in the same channel
          musicFunction.resumeMusic(msg, guildQueue);
          break;
        default:
          break;
      }
    }
  },
};
