const botconfig =require("./botconfig.json");
const discord =require("discord.js");

const bot = new discord.Client({DisableEveryone: true})

bot.on("ready", async () => {
Console.log(`$({bot.user.username} is online!`)
bot.user.activity ("Xblokzz Bot Online", {type: "Streaming"});


bot.on("message", async message => {
if(message.author.bot || message.channel.type === "dm") return;

let prefix = index.js.prefix;
let messageArray = message.content.split(" ")
let cmd = messageArray[0]
let args = messageArray.slice[0]

if(cmd === `${prefix}hello`){
return message.channel.send("hello")

const prefix = '!';

}



})
})

const user = message.metions.users.first();

const member = member.guild.member(user);

if (member){
    member.kick('You Were kicked!').then(()=>{
message.reply(`Sucessfully Kicked ${user.tag}`);
    }).catch(err =>{
message.reply('I was Unable To Kick The Member');
console.log(err);
    });

}  else{
message.reply ("That User Isn\'t in the This guild")

 }{

    {






}


}
























bot.login(botconfig.token);

