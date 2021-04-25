const axios = require("axios");
const url = "https://api.funtranslations.com/translate/yoda.json";

const yodaspeak = async (str) => {
  console.log(str);
  var result;
  await axios({
    method: "post",
    url: url,
    data: {
      text: str,
    },
  })
    .then(function (response) {
      result = response.data.contents.translated;
    })
    .catch(function (response) {
      //handle error
    });
  return result;
};

module.exports = yodaspeak;
