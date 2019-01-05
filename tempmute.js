const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

let tomute = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));

//start of createRole
if(!tomute) return message.reply("Please specify a user!");

if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("They cannot be muted!");
let muterole = message.guild.roles.find('name', "Muted");
if(!muterole){
  try{
    muterole = await message.guild.createRole({
      name: "muted",
      color: "#000000",
      permissions: []

    })

  message.guild.channels.forEach(async (channel, id) => {
await channel.overwritePermissions(muterole, {
SEND_MESSAGES: false,
ADD_REACTIONS: false


});

});


  }
  catch(e){
    console.log(e.stack);
  }
}
//end of createRole

let mutetime = args[1];
if(!mutetime) return message.reply("Please specify a time!");

await (tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

setTimeout(function(){

tomute.removeRole(muterole.id);
message.channel.send(`<@${tomute.id}> has been unmuted!`);


}, ms(mutetime));



}

module.exports.help = {

name: "tempmute"

}
