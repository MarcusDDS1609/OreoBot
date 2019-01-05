const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
let muterole = message.guild.roles.find('name', "Muted");
let tomute = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));

await (tomute.removeRole(muterole.id));
message.reply(`<@${tomute.id}> has been unmuted!`);



  }






module.exports.help = {
  name: "unmute"

}
