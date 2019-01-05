const Discord = require('discord.js');



module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission('BAN_MEMBERS')){
    return message.reply("Sorry, you don't have permissions to use this!");
  }

  message.reply("Server settings -> Bans -> Find the user you want to unban -> Revoke!")



}


module.exports.help = {
  name: "unban"

}
