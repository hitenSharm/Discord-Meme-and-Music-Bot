const {decode} = require('html-entities')
const emojify = require("../botFunctions/emoji");

module.exports = {
  name: "obemojify",
  description: "convert into emoji",
  async execute(msg, args) {

    //Extract the text to be emojified
    let text = msg.content.split(" ")
    text.shift()
    text = text.join("%20")

    //Emojify the text
    const emojifiedText = await emojify(text)

    //Create an embed
    const embed={
      color: 0x0099ff,
      title: 'Emojified',
      description: decode(emojifiedText)
    }

    msg.channel.send({embeds:[embed]});
  },
};
