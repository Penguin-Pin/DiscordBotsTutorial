let discord = require("discord.js"); //Подключаем Discord.js
let config = require("./config.json"); //Подключаем конфиг

let client = new discord.Client(); //Главный объект Discord.js - с него начинается обработка событий
client.on("message", message => { //Создаем обработчик событий на message
    //Используем message.content
    if(message.content == `${config.prefix}test`){ //ВАЖНО: объект Message содержит всю информацию о сообщении, но не его содержание!
        message.reply("Я живой!"); //Отвечаем на сообщение
    }
});

client.on("message",message => {
    if(message.content == `${config.prefix}play`) message.reply("Я не умею играть")
});

client.on("message", message => {
    if(message.content == `${config.prefix}ping`)message.reply("твой пинг равен"+client.ping)
});

client.login(process.env.BOT_TOKEN); 
