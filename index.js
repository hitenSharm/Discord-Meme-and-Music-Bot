require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
//bot functions
const fillMemes = require("./botFunctions/fillmemes");
const sendgif = require("./botFunctions/fillGifs");

bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", async (msg) => {
  if (msg.content === "!okbuddymeme") {
    var meme = await fillMemes();
    const embed = new Discord.RichEmbed()
      .setTitle(meme.title)
      .setImage(meme.image, 300, 300)
      .setFooter(`(delay: ${Date.now() - msg.createdAt}ms)` + " Bot by Tecno");
    msg.channel.send(embed);
  }

  if (msg.content === "!okbuddygif") {
    var gif = await sendgif();
    msg.channel.send(gif);
    msg.reply(`*(delay: ${Date.now() - msg.createdAt}ms)*`);
  }

  if (msg.content === "!help") {
    msg.channel.send(
      " 1. !okbuddymeme command for viewing a meme \n2. !okbuddygif for a random gif"
    );
  }
});
