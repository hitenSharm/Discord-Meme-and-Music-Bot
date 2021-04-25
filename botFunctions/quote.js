const url = "https://api.kanye.rest/";
const axios = require("axios");

const kanyeQuote = async () => {
  var quote;
  await axios.get(url).then((res) => {
    quote = res.data.quote;    
  });  
  return quote;
};

module.exports=kanyeQuote;