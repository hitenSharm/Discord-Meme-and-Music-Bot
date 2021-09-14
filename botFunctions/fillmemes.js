const redditImageFetcher = require("reddit-image-fetcher");
const subs = require("../choices/optionsSub");

const fillMemes = async () => {
  var ans;
  var randomNo = Math.floor(Math.random() * subs.length);
  await redditImageFetcher
    .fetch({
      type: "custom",
      total: 1,
      addSubreddit: [subs[randomNo]],
    })
    .then((result) => {
      ans = result[0];
    });

  return ans;
};

module.exports = fillMemes;
