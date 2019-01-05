const Discord = require('discord.js');
const fs =  require("fs");
let config = require('../botconfig.json');

module.exports.noPerms = (message, perm) => {

let embed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor('#12e234')
.setTitle("No perms")
.addField("Insufficent permission", perm);

message.channel.send(embed).then(m => m.delete(5000));



}
