const TeleBot = require('telebot');
const bot = new TeleBot("5103997793:AAGi-6lFQQ8Pl_srnf8WhAKCshCQbnuh1wI");
console.log("starting...")

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));