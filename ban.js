const Discord = require('discord.js');
const errors = require('../utils/errors.js');



module.exports.run = async (bot, message, args) => {
var reason = message.content.split(' ').slice(2).join(' ');
  const member = message.mentions.members.first();

  const banEmbed = new Discord.RichEmbed()
  .setColor('#12e234')
  .addField(`User banned:`, `${member}`)
  .addField(`Reason:`, `${reason}`);


  if(!message.member.hasPermission('BAN_MEMBERS')){
    return errors.noPerms(message, "BAN_MEMBERS");
  }
    if(!member)
    return message.reply("Please mention a valid member of this server");
    if(!member.bannable)
  return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

  if(!reason) return message.reply("Please specify a reason!");
  message.reply(banEmbed)
  await member.ban();

}





module.exports.help = {
  name: "ban"

}
