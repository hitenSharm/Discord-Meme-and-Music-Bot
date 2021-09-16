const yodaspeak = require("../botFunctions/yoda");

module.exports = {
  name: "yoda",
  description: "Yoda speak",
  async execute(msg, args) {
    var str = "";
    for (var i = 0; i < args.length; i++) {
      str += args[i];
      str += " ";
    }
    var ans = await yodaspeak(str);
    msg.channel.send(ans);
  },
};
