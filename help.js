const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {


const helpEmbed = new Discord.RichEmbed()
.setColor('#12e234')
.addField('help', 'Displays all commands!', false)
.addField('roll', 'Rolls a random number!', false)
.addField('8ball', 'Answers your questions!', false)
.addField('ping', "Displays DeepBot's current ping!", false)
.addField('kick', "Kicks user if they been naughty!", false)
.addField('ban', "Bans user if they been EXTRA naughty!", false)
.addField('tempmute', "Temp mutes a user for a period of time!", false)
.addField('say', 'Says a command!', false)
.addField('purge', 'Clears a certain amount of messages!', false)
.addField('unmute', 'Unmutes a user!', false)
.addField('mute', 'Mutes a user!', false)
.setThumbnail("https://aivo.co/wp-content/uploads/2018/04/Help-color-1.png")

message.channel.send(helpEmbed)
  }






module.exports.help = {
  name: "help"

}
