const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the perms to do that buddy,");
let botmessage = args.join(" ");
if(!botmessage)return message.reply("you must specify a message").then(m=>m.delete(5000));
message.channel.send(botmessage);

  }






module.exports.help = {
  name: "say"

}
