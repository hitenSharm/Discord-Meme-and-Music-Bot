const gifIdeas = require("../choices/optionGif");
const Tenor = require("tenorjs").client({
  Key: process.env.TENORKEY,
  Filter: "off",
  Locale: "en_US",
  MediaFilter: "minimal",
  DateFormat: "D/MM/YYYY - H:mm:ss A",
});

const sendgif = async () => {
  var gifs = [];
  var ans;
  var randomNumber = Math.floor(Math.random() * 6);
  var queryGif = gifIdeas[randomNumber];
  await Tenor.Search.Query(queryGif, "10")
    .then((Results) => {
      Results.forEach((Post) => {
        gifs.push(Post.url);
      });
    })
    .catch(console.error);
  randomNumber = Math.floor(Math.random() * 10);
  ans = gifs[randomNumber];
  return ans;
};

module.exports = sendgif;
