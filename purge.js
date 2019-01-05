const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have the permission to do this peasant!");
if(!args[0]) return message.channel.send("You didn't specify how many messages you want cleared dummy!");
message.channel.bulkDelete(args[0]).then(() => {

message.channel.send(`Cleared ${args[0]} messages`).then(message => message.delete(5000));

});

  }






module.exports.help = {
  name: "purge"

}
