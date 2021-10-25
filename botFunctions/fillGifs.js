const gifIdeas = require("../choices/optionGif");
const Tenor = require("tenorjs").client({
  Key: process.env.TENORKEY,
  Filter: "off",
  Locale: "en_US",
  MediaFilter: "minimal",
  DateFormat: "D/MM/YYYY - H:mm:ss A",
});

const sendgif = async (msg, args) => {
  var gifs = [];
  var ans;
  if (args.length === 0)
    var randomNumber = gifIdeas[Math.floor(Math.random() * gifIdeas.length)];
  else var randomNumber = args;
  await Tenor.Search.Query(randomNumber, "10")
    .then((Results) => {
      Results.forEach((Post) => {
        gifs.push(Post.url);
      });
    })
    .catch(console.log("Keep going")); //catch will work but wont stop return ans
  randomNumber = Math.floor(Math.random() * 10);
  ans = gifs[randomNumber];
  return ans;
};

module.exports = sendgif;
