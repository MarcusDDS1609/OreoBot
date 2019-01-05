const Discord = require('discord.js');



module.exports.run = async (bot, message, args) => {

if(!args[2]) return message.reply("Please ask a full question!");
let EightBall = ["Yes", "No", "Maybe", "Definitely", "I think so", "Defo not", "Defo", "Probs", "Ask again and we'll see..."];
let result = Math.floor((Math.random() * EightBall.length));
let Question = args.slice(0).join(" ");


if(Question == "Is rizwan gay") return message.reply("Nope he's the best");
if(Question == "Is kieran gay") return message.reply("YES, YES YES YES YES");
let EightballEmbed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("#12e234")
.addField("Question", Question)
.addField("Answer", EightBall[result]);
message.channel.send(EightballEmbed);




}





module.exports.help = {
  name: "8ball"

}
