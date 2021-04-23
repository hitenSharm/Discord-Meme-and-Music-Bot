const grabInsult = require("../botFunctions/insult");

module.exports = {
  name: "insult",
  description: "Sends insults",
  async execute(msg, args) {
    const reply = await grabInsult();
    msg.channel.send(reply);
  },
};
