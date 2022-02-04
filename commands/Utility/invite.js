const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'invite',
    description: "Gives the Invite Link for this Bot to add it to your server!",
    usage: "?invite",
    aliases: ['inv'],
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setDescription('You Can Invite me to Your server using the \'Click Me\' Button \n\n [Click Me](https://discord.com/api/oauth2/authorize?client_id=769330211157835784&permissions=431698082881&scope=bot)')
        .setColor("RANDOM")
        
        
        message.channel.send(embed)
    }
}
