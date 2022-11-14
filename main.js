const TeleBot = require('telebot');
const bot = new TeleBot("YOUR TOKEN");
console.log("starting...")

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));
