const embed = {
  color: 0x0099ff,
  title: "Welcome to Help!",
  url: "https://discord.js.org",
  author: {
    name: process.env.BOT ? `${process.env.BOT}` : "OkBuddy",
  },
  description:
    "You can use the following commands:\n1. `!obmeme` for a random meme \n>>`!obmeme subreddit1 subreddit2 ...` to view multiple memes. \n\n2. `!obgif` for a random gif \n>>`!obgif topic1 topic2....` to view multiple gifs \n\n3. `!insult + tag the person` Generate an insult \n\n4. `!kanyegod` for a Kanye West quote\n\n5. Drop image with comment `!anime` to find out which anime it is\n\n6. `!yoda + yourText` to transelate to yoda speak\n\n7. `!obm play <song name>` to play\n\n8. `!obm skip` to skip\n\n9. `!obm stop` to stop\n\n10. `!obm pause` to pause\n\n11. `!obm resume` to resume\n\n12. `!obtalk your text` to chat with the chatbot \n\n13.`!obemojify your text` to turn words into emojis\n\nWebsite:https://hiten-sharma-website.netlify.app \nRequest a feature by creating a new issue at https://github.com/hitenSharm/Discord-Meme-and-Music-Bot/issues\n\nThis is an open-source project. View the repository at https://github.com/hitenSharm/Discord-Meme-and-Music-Bot",
  thumbnail: {
    url: "https://imgur.com/fs8xRSz.png",
  },
  timestamp: new Date(),
  footer: {
    text: "Keep laughing",
    icon_url: "https://imgur.com/fs8xRSz.png",
  },
};

module.exports = {
  name: "help",
  description: "help",
  execute(msg, args) {
    msg.channel.send({ embeds: [embed] });
  },
};
