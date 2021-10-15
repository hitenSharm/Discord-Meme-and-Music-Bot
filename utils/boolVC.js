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
module.exports = checkVC;
