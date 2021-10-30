const discord = require("discord.js");

//checks if author is in VC, if not sends error message
const checkVC = (msg) => {
  try {
    msg.member.voice.channel.members;
    return true;
  } catch (error) {
    msg.reply(
      "Only those who hear the music may interfere with the music \n - Socrates, probably"
    );
  }
};

//checks if user is in same VC as the bot
const sameVC = (msg) => {
  try {
    if ((msg.member.voice.channel.members.has(client.user.id))) return true;
    else 
    throw error;
  } catch (error) {
    msg.reply("I'm in another voice channel");
  }
};

module.exports = {
  checkVC,
  sameVC,
};
