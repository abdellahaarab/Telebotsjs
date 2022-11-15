// const  Manga = require("C:\\Users\\ABDELLAH\\Desktop\\Telebotsjs\\logic\\manga.js") ;
// import * as fetch from "node-fetch";
// const fetch = require("node-fetch");

const request = require('request');

const TeleBot = require('telebot');
const token = ""
const bot = new TeleBot(token);
console.log("starting...")

bot.on(['/start'], (msg) => msg.reply.text('Welcome!'));



// async function Manga(){
//     const response = await fetch('https://api.jikan.moe/v4/random/anime')
//     const data = await response.json()
//     console.log('-' + data)
//     // return data.data
// }
bot.on(['/help'], (msg) => msg.reply.text("animexdrg.com !!"));
bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
  });

bot.on(['/anime'], (msg) => {
    const id = msg.chat.id;
    bot.sendMessage(id,"Waiting ...").then(()=>
        request("https://api.jikan.moe/v4/random/anime", async function(error,response,body){
           const dataAll = JSON.parse(body);
           const data = dataAll.data;
        //    console.log(data);
           await msg.reply.photo(data.images.jpg.image_url)
           await bot.sendMessage(id,`Title : ${data.title} \n Type : ${data.type} \n Status : ${data.status} \n Episodes : ${data.episodes} \n url : ${data.url} `); 
        })
    );
});





bot.on(['/manga'], (msg) => {
    const id = msg.chat.id;
    bot.sendMessage(id,"Waiting ...").then(()=>
        request("https://api.jikan.moe/v4/random/manga", async function(error,response,body){
           const dataAll = JSON.parse(body);
           const data = dataAll.data;
        //    console.log(data);
           await msg.reply.photo(data.images.jpg.image_url)
           await bot.sendMessage(id,`Title : ${data.title} \n Type : ${data.type} \n Status : ${data.status} \n Episodes : ${data.episodes} \n url : ${data.url} `); 
        })
    );
});





bot.on(['*',!'/'], (msg) => {
    const id = msg.chat.id;
    const message = msg.chat.message;
    bot.sendMessage(id,"Waiting ...").then(()=>
        request(`https://api.jikan.moe/v4/anime?q=${message}`, async function(error,response,body){
           const dataAll = JSON.parse(body);
           const data = dataAll.data;
        //    console.log(data);
           data.map((elm,i)=>{
              if(i<11){
                msg.reply.photo(elm.images.jpg.image_url)
                bot.sendMessage(id,`Title : ${elm.title} \n Type : ${elm.type} \n Status : ${elm.status} \n Episodes : ${elm.episodes} \n url : ${elm.url}`);
              }
               
           })
        })
    );
});

bot.start();




// await bot.sendMessage(id,`Title : ${data.title} \n Type : ${data.type} \n Status : ${data.status} \n Episodes : ${data.episodes} \n url : ${data.url} `); 
// await msg.reply.photo(data.images.jpg.image_url)
           