const Discord = require('discord.js');



module.exports.run = async (bot, message, args) => {
var reason = message.content.split(' ').slice(2).join(' ');
  const member = message.mentions.members.first();

  const kickEmbed = new Discord.RichEmbed()
  .setColor('#12e234')
  .addField(`User kicked: ${member}`, `Reason: ${reason}`);


  if(!message.member.hasPermission('KICK_MEMBERS')){
    return message.reply("Sorry, you don't have permissions to use this!");
  }
    if(!member)
    return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
  return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

  if(!reason) return message.reply("Please specify a reason!");
  message.reply(kickEmbed)
  await member.kick();

}







module.exports.help = {
  name: "kick"

}
