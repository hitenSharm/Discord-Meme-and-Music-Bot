const grabInsult = require("../botFunctions/insult");

// using setTimeout to prevent repeating insults.
// Since await only uses promises
// we need to wrap setTimeout in a promise
const setTimeoutPromise = (timeout) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

// reply to message if there is only one arg
module.exports = {
  name: "insult",
  description: "Sends insults",
  async execute(msg, args) {
    
    //setting timeout to 2000ms
    await setTimeoutPromise(2000);
    if (args.length === 0) {
      const reply = await grabInsult();
      msg.reply(reply.toString());
    }

    // else loop over args and send insults
    for (let i = 0; i < args.length; i++) {

      //setting timeout to 2500ms
      await setTimeoutPromise(2500);
      const reply = await grabInsult();
      msg.channel.send(reply.toString() + args[i]);
    }
  },
};
