const url = "https://api.trace.moe/search?anilistInfo&url";
const fetch = require("node-fetch"); //to use fetch

const animeFinder = async (img) => {
  let result = 0;
  await fetch(
    `${url}=${encodeURIComponent(img)}`
  )
    .then((e) => e.json()) //convert to json
    .then((e) => {
      result = e;
    })
    .catch((error)=>{
      console.log(error);
    });
  return result;
};

module.exports = animeFinder;
