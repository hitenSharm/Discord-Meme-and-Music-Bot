const embed = {
  color: 0x0099ff,
	title: 'Welcome to Help!',
	url: 'https://discord.js.org',
  author:{
    name: process.env.BOT ? `${process.env.BOT}`  :"OkBuddy"
  },
  description : "You can use the following commands:\n1. !obmeme command for viewing a meme \n2. !obgif for a random gif \n3. !insult + tag the person Generate an insult \n4. !kanyegod for a Kanye West quote\n5. Drop image with comment !anime to find out which anime it is\n6. !yoda + yourText to transelate to yoda speak\n7. !obm play <song name> to play\n8. !obm skip to skip\n9. !obm stop to stop\n10. !obm pause to pause\n11. !obm resume to resume\n11. Website:https://hiten-sharma-website.netlify.app \n12.  Request a feature by creating a new issue at https://github.com/hitenSharm/Discord-Meme-and-Music-Bot/issues\n13. This is an open-source project. View the repository at https://github.com/hitenSharm/Discord-Meme-and-Music-Bot" ,
	thumbnail: {
		url: 'https://imgur.com/fs8xRSz.png',
	},
	timestamp: new Date(),
	footer: {
		text: 'Keep laughing',
		icon_url: 'https://imgur.com/fs8xRSz.png',
	},
}


module.exports = {
  name: "help",
  description: "help",
  execute(msg, args) {
    msg.channel.send({embeds:[embed]});
  },
};
