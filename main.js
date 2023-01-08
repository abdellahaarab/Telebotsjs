const TeleBot = require('telebot');
const bot = new TeleBot("Your Token");

function InfAnime(Data)  {
    return `Title : ${Data.data.title}\nDuration : ${Data.data.duration}\nRating : ${Data.data.rating}\nScore : ${Data.data.score}\nMembers : ${Data.data.members}\nSynopsis : ${Data.data.synopsis}`    
}

RandomAnime = (msg)=>{
    fetch('https://api.jikan.moe/v4/random/anime')
        .then((res)=>res.json())
        .then((data)=> 
            {bot.sendMessage(msg.from.id,InfAnime(data))}
        )
        .catch((e)=>console.log(e));
}


RandomManga = (msg)=>{
    fetch('https://api.jikan.moe/v4/random/manga')
        .then((res)=>res.json())
        .then((data)=> 
            {
                bot.sendPhoto(msg.from.id,data.data.images.jpg.image_url);
                bot.sendMessage(msg.from.id,InfAnime(data));
            }
        )
        .catch((e)=>console.log(e));
}


RandomAnimeImage = (msg)=>{
    fetch('https://api.jikan.moe/v4/random/anime')
        .then((res)=>res.json())
        .then((data)=> 
            {bot.sendPhoto(msg.from.id,data.data.images.jpg.image_url)}
        )
        .catch((e)=>console.log(e));
}


console.log("starting...")

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome ! 👋', { asReply: true }));
bot.on(/(Hello\s)?hello*/, (msg) => msg.reply.text('Hi ! Welcome Back 😀'));
bot.on(/(Hi\s)?hi*/, (msg) => msg.reply.text('Hi !, Mr ' + msg.from.first_name + ' 😇'));
bot.on(['/anime'], RandomAnime);
bot.on(['/manga'], RandomManga);
bot.on(['/image'], RandomAnimeImage);

bot.on('sticker', (msg) => {
    return msg.reply.sticker('./assets/Gif/001.gif', { asReply: true });
});

bot.start();