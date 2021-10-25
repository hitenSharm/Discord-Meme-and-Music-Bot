const redditImageFetcher = require("reddit-image-fetcher");
const subs = require("../choices/optionsSub");

const fillMemes = async (args) => {
  var ans;
  if(args.length === 0)
  var randomNo = [subs[Math.floor(Math.random() * subs.length)]];
  else 
  var randomNo = args;
  await redditImageFetcher
    .fetch({
      type: "custom",
      total: 1,
      addSubreddit: randomNo,
    })
    .then((result) => {
      ans = result[0];
    });

  return ans;
};

module.exports = fillMemes;
