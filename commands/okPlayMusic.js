const Discord = require("discord.js");

//initializing
let queue = 0;
let song = 0;
let num = 0;

module.exports = {
  name: "obm",
  description: "Work with Music",
  async execute(msg, args) {
    // num = msg.author.voice.channel.members.array().length
    const guildQueue = client.player.getQueue(msg.guild.id);
    var cmd = args[0];
    args.shift();
    switch (cmd) {
      case "play":
        queue = client.player.createQueue(msg.guild.id);
        await queue.join(msg.member.voice.channel);
        //setting data -> skipCounts and userRequests
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
          .setImage(song.thumbnail,300,300);
        msg.channel.send({ embeds: [embed] });
        break;
 
        case "stop":
          //try and catch
          try {
            guildQueue.stop();
          } catch (error) {
            msg.reply(
              "Only the ones who hear the music may stop the music \n -Aristotle, probably"
              );
            }
            break;
            case "skip":
              try {
                //checks if person is in voice chat
                // msg.member.voice.channel.members;
                msg.member.voice.channel.members;
                num = 0;
                msg.member.voice.channel.members.forEach(() => {
                  num = num + 1;
                });
                //checks if user_id is repeating, if not adds skipCount and
                //appends user to userRequest
                if (!song.data.userRequest.includes(msg.author.id)) {
                  song.data.userRequest.push(msg.author.id);
                  song.data.skipCounts = song.data.skipCounts + 1;
                  msg.reply(
                    `\n ** ${song.data.skipCounts} / ${num - 1} ** want to skip`
                    );
          }
          //prevents repeating requests
          else msg.reply("(≖᷆︵︣≖)👎");
          //checks if condition is satisfied
          if (song.data.skipCounts >= 0.5 * (num - 1)) guildQueue.skip();
        } catch (error) {
          //if outside the VC
          msg.reply("Why are you like this? \n Get some help");
        }
        break;

      case "stop":
        //try and catch 
        if(!guildQueue){
          msg.reply("No song playing bruv")
          break
        }
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
        if(!guildQueue){
          msg.reply("No song playing bruv")
          break
        }
        try{
          msg.member.voice.channel.members;
          guildQueue.skip();
        }catch(err){
          msg.reply(
            "Only the ones who hear the music may skip the music \n -Your mom, probably"
          );
        }
        break;

      case "progress":
        if(!guildQueue){
          msg.reply("No song playing bruv")
          break
        }
        const ProgressBar = guildQueue.createProgressBar();
        msg.reply(ProgressBar.prettier);
        break;
      case "pause":
        if(!guildQueue){
          msg.reply("No song playing bruv")
          break
        }
        guildQueue.setPaused(true);
        break;
      case "resume":
        if(!guildQueue){
          msg.reply("No song playing bruv")
          break
        }
        guildQueue.setPaused(false);
        break;
      default:
        break;
    }
  },
};
