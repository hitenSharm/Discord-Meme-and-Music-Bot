const Discord = require("discord.js");
const kanyeQuote=require('../botFunctions/quote');

module.exports={
    name:'kanyegod',
    description:'Quotes Kanye West',
    async execute(msg,args){
        var quote=await kanyeQuote();        
        const embed = new Discord.RichEmbed()
        .setTitle('Kanye West once said : ')
        .setAuthor('Kanye')
        .setDescription(quote)
        .setImage('https://i.imgur.com/VYKss74.jpg')
        msg.channel.send(embed);
    }
}