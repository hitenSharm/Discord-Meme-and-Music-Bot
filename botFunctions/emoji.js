const axios = require('axios')

const emojify = async(text) => {

    try {
        const response = await axios.get(`https://api.funtranslations.com/translate/emoji.json?text=${text}`)

        let emojifiedText = response.data.contents.translated
        return emojifiedText;

    } catch (e) {
        console.log(e)
        return "Oops, you have run the commands too many times";
    }
}

module.exports = emojify