const sendgif = require("../botFunctions/fillGifs");

module.exports = {
  name: "obgif",
  description: "Sends gifs",
  async execute(msg, args) {
    for (const arg of args) {
      var gif = await sendgif(msg, arg);
      //if gif does not exist it sends back undefined object
      //and we get : DiscordAPIError: Cannot send an empty message
      //and program breaks and needs to be restarted 
      if(typeof gif === 'undefined')
      msg.reply("This makes no sense");
      else{
        msg.channel.send(gif);
        msg.reply(`*(delay: ${Date.now() - msg.createdAt}ms)*`);
      }

    }
  },
};
