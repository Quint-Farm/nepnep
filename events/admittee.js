module.exports = {
	name: 'guildMemberAdd',
    execute(member) {
    console.log('User: ' + member.user.username + ' has joined the server!');
	
	let newRole = member.guild.roles.cache.get("1257558423621468220");
    let unadmittedRole = member.guild.roles.cache.get("1259312211663392768");

	member.roles.add(newRole);
	member.roles.add(unadmittedRole);
	member.send(`
	‎ 
Meow! 

			I'm Nepabella, one of Quint Farm's cat. :black_cat:
	And welcome to Quint Farm!

		Before you get started, read https://discord.com/channels/1253265326393786448/1253693713243181136 first and 
				provide the **2** requested info to this DM or @marimari3215!


	And finally enjoy your stay!
        `)
    },
};