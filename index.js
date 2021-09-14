require("dotenv").config();
const Discord = require("discord.js");
const { Intents } = require('discord.js');
const { Player } = require("discord-music-player");
global.client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES]
});

const TOKEN = process.env.TOKEN;

const prefix = "!";
//read command files
const fs = require("fs");
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

client.login(TOKEN);

client.on("ready", () => {
  console.info(`Logged in as ${client.user.tag}!`);
});


//Music bot setup
const player = new Player(client, {
    leaveOnEmpty: false,
  });

  client.player=player;

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("message", async (msg) => {  
  if (msg.author.bot || !msg.content.startsWith(prefix)) return;
  const commandBody = msg.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();    

  

  if (!client.commands.has(command)) return;  
  try {
    await client.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply("issue!");
  }
});



