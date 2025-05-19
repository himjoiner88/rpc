const Discord = require('discord.js-selfbot-v13');
const fs = require('fs');  // Modul zum Lesen der Datei
const path = require('path'); // Hilft beim Umgang mit Dateipfaden

// Lese die Tokens aus der "Tokens.txt"-Datei
const tokens = fs.readFileSync(path.join(__dirname, 'Tokens.txt'), 'utf8').split('\n').map(token => token.trim());

tokens.forEach((token, index) => {
    const client = new Discord.Client({
        checkUpdate: false
    });

    client.on('ready', async () => {
        console.log(`Account ${index + 1} (${client.user.tag}) ist bereit!`);

        const rpc = new Discord.RichPresence(client)
            .setApplicationId('1341080440278355999')
            .setType('STREAMING')
            .setURL('https://twitch.tv/88_fynnfs')
            .setName('☆')
            .setState('☆')
            .setAssetsSmallImage('');

        client.user.setActivity(rpc.toJSON());
    });

    // Login mit dem jeweiligen Token
    client.login(token).catch(err => {
        console.error(`Fehler beim Login mit Token ${index + 1}: ${err.message}`);
    });
});
