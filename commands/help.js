module.exports = {
  name: "help",
  description: "help",
  execute(msg, args) {
    msg.channel.send(
      " 1. !okbuddymeme command for viewing a meme \n2. !okbuddygif for a random gif \n3. Generate an insult"
    );
  },
};
