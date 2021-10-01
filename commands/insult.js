const grabInsult = require("../botFunctions/insult");

module.exports = {
  name: "insult",
  description: "Sends insults",
  async execute(msg, args) {
    // reply to message if there is only one arg
    if(args.length===0) {
      const reply = await grabInsult();
      msg.reply(reply.toString());
      return;
    }
    
    // else loop over args and send insults
    for (let i = 0; i < args.length; i++) {
      const reply = await grabInsult();
      msg.channel.send(reply.toString() + args[i]);
    }
  },
};
