const Discord = require('discord.js');



module.exports.run = async (bot, message, args) => {


      message.reply("Your number is...." + " " + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 9));
    }

module.exports.help = {
  name: "roll"

}
