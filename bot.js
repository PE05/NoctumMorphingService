const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"; // Change this to your desired prefix

// Token login
client.login('ODAxMTA5NTgzNzIzODg4NzAw.G-AHB-.3lImOXWPj7rw7iOIFuGvXDKTT662eVJH1mRA0o');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageReactionRemove', async (reaction, user) => {
  console.log('Reaction removed!');
  const channel = client.channels.cache.get('1075832777150320764');

  // Fetch the user's avatar URL
  await user.fetch();
  const avatarUrl = user.displayAvatarURL({ format: 'png', dynamic: true });

  // Create the embedded message
  const embed = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(`Reaction ${reaction.emoji} removed from message ${reaction.message.id}`)
    .setDescription(`By ${user.tag}\n[Jump to message](${reaction.message.url})`)
    .setThumbnail(avatarUrl);

  // Send the embedded message to the channel
  channel.send(embed);
});

