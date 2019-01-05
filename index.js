process.on('unhandledRejection', console.error)
// Bot configuration
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const RichEmbed = new Discord.RichEmbed();
const fs =  require("fs");
const botconfig = require("./botconfig.json");

bot.on("message", async message => {
// The stuff i need the stuff to do stuff
let prefix = botconfig.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);
});

bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
if(err) console.log(err)

let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands!");
    return;
  }
    jsfile.forEach((f, i) => {

    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
});
});


bot.on("ready", () => {
console.log('Ready boss!');
bot.user.setPresence({
  game: {
    name: "Servers Perish",
    type: "WATCHING"

  }
})
});

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);






bot.login(botconfig.token);
