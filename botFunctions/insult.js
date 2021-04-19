const url="https://evilinsult.com/generate_insult.php?lang=en&type=json"
const axios=require('axios');

const grabInsult = async () =>{
    var insult;
    await axios.get(url).then(
        function(response){            
            insult=response.data.insult;
        }
    )    
    return insult;
}

module.exports = grabInsult;