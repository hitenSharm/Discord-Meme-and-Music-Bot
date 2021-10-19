const discord = require("discord.js");

//checks if author is deaf, if yes sends error message
const checkDeaf = (msg) => {
  try {
    if (msg.member.voice.deaf) {
      msg.reply(
        "you're deaf, punk"
      );
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = checkDeaf;
