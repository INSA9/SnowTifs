require('dotenv').config();
const Discord = require('discord.js');
const express = require('express');
const bodyParser = require('body-parser');

const client = new Discord.Client();
const app = express();

let channel;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

client.login(process.env.TOKEN);
app.listen(process.env.PORT);

client.on('ready', async () => {
    channel = await client.channels.fetch('771884136733605905');
});

app.post('/', (req, res) => {
    const data = JSON.parse(Object.keys(req.body));

    const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle(data.title)
        .setDescription(data.content)
        .setTimestamp();
    channel.send(embed)
});