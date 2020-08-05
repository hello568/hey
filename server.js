
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
client.login("NzQwNTI4MjE4NjQ5Mzk1Mjgw.XyqUpQ.-ZtWfmjkRCOJb9DZmU9wZ2gTEYg");
client.once("ready", () => {
  console.log("Ready!");
});

client.on('message', message => {
	if (message.content.startsWith(".repeat")) {
    var text = message.content
    message.channel.send(text)
  }
  if (message.content.startsWith(".calculate")) {
    var math = message.content
    message.channel.send(math)
  }
}); 

