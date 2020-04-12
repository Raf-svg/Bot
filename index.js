const botconfig =require("./botconfig.json");
const discord =require("discord.js");

const bot = new discord.Client({DisableEveryone: true})

bot.on("ready", async () => {
Console.log(`$({bot.user.username} is online!`)
bot.user.activity ("Xblokzz Bot Online", {type: "Streaming"});


bot.on("message", async message => {
if(message.author.bot || message.channel.type === "dm") return;

let prefix = botconfig.prefix;
let messageArray = message.content.split(" ")
let cmd = messageArray[0]
let args = messageArray.slice[0]

if(cmd === `${prefix}hello`){
return message.channel.send("hello")



}



})
})
bot.login(botconfig.token);