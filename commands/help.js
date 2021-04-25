module.exports = {
  name: "help",
  description: "help",
  execute(msg, args) {
    msg.channel.send(
      " 1. !okbuddymeme command for viewing a meme \n2. !okbuddygif for a random gif \n3. !insult Generate an insult \n4. !kanyegod for a Kanye West quote\n5. Drop image with comment !anime to find out which anime it is\n6. !yoda + yourText to transelate to yoda speak"
    );
  },
};
