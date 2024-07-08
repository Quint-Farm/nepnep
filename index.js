
const dotenv = require('dotenv');
dotenv.config();

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, infoprefix } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

console.log(process.env.DISCORD_TOKEN);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module

	client.commands.set(command.name, command);
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

/*

let arrayVar = [];
let remembered = arrayVar.find(i => i.id === message.author.id);

*/



client.on("message", async message => {

if (message.content === "PM me") {
	// user.send("Meow!")
}
	
/*
	if (message.content === "!ninv") {
		arrayVar.push({ "id": message.author.id, "input": input_variable });
		console.log(`${message.content}`)
	}

	if (message.content === "!inv") {
		if (true) {
			message.channel.send(`You said "${remembered.input}"`);
		} else
			return message.channel.send("There is nothing to remember!");
	}
*/

	// if (message.content === "!test") {
	// 	const guild = client.guilds.cache.get("1253265326393786448");
	// 	guild.commands.delete('1258598623265161276');
	// }






	if (message.content === "!schedule") {
		if (message.member.roles.cache.some(role => role.name === 'Host')
			// || (role => role.name === 'Holder') LOL FIXED
		) {
			client.channels.cache.get('1258987230513594398').send(`
Hello <@&1256217332376928378>, Nepabella here! 
			Schedule will start soon if alltogether: react or let us know beforehand if you plan to join! ~7AM EST
	Will postpone otherwise!`).then(reactmessage => {
				reactmessage.react("👍"),
					reactmessage.react("👎"),
					reactmessage.react("🤷")
			})
		}





		// if (author.roles.cache.some(role => role.name === 'Host')) {
		// 	if (message.content === "!schedule") {
		// 		message.channel.send(`Hello <@&1256217332376928378>, Nepabella here!
		// 	new schedule will start soon: If anyone will join react accordingly`).then(reactmessage => { 



		// 	})
		// 	// message.react();
		// 	// message.react();


		// 	}
	}

	const dms = client.channels.cache.get('1258628125479407616');

	if (message.channel.type === 'dm') {
		dms.send(message.author.tag + ` ` + message.author.avatarURL() + `: ` + message.content);
	}

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}

});

client.on('guildMemberAdd', member => {
	// console.log('User: ' + member.user.username + ' has 		joined the server!');

	// Incase bot is turned off.
	const userId = (" ");
	const user = client.users.cache.get(userId);
	
	let newRole = member.guild.roles.cache.get("1257558423621468220");
	member.roles.add(newRole);
	member.send(`
	‎ 
Meow! 

			I'm Nepabella, one of Quint Farm's cat. :black_cat:
	And welcome to Quint Farm!

		Before you get started, read https://discord.com/channels/1253265326393786448/1253693713243181136 first and 
				provide the **2** requested info to this DM or @marimari3215!


	And finally enjoy your stay!

															 `)


	// const someRole = guild.roles.cache.get("1257558423621468220")
	// member.roles.add(someRole)
	// const yourNewROLE = guildMember.guild.roles.cache.find(role => role.name === "New!");
	// guildMember.roles.add(yourNewROLE);
	// const TestRole = message.guild.roles.cache.get("1257558423621468220");
	// guildMember.roles.add(TestRole);

	/*
 let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'New!');

 guildMember.roles.add(welcomeRole);

 let aboveRole = message.guild.roles.cache.get("1257558423621468220");

 guildMember.roles.add(aboveRole);
	 */

});

client.login(process.env.DISCORD_TOKEN);