const axios = require("axios");
const url = "https://trace.moe/api/search";
const base64 = require('node-base64-image');

var options = {string: true};

const animeFinder = async (img) => {
  var result;  
  var b64 = await base64.encode(img,options);
  await axios({
    method: "post",
    url: url,
    data: {
      image: b64,
    },
  })
    .then(function (response) {
      //handle success
      result =response.data.docs[0];
    })
    .catch(function (response) {
      //handle error     
    });
    return result;
};

module.exports = animeFinder;
