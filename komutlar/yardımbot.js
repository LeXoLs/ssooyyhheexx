const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('702922751962382449') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Bot Komutları Listesi`)
        .setDescription(` • | **${ayarlar.prefix}bot-bilgi** : Botun Bilgilerini Listelersiniz.\n • | **!talep** : Sunucudaki Yetkili Ekibiyle Özel Olarak Oda Oluşturursunuz.\n • | **${ayarlar.prefix}yapımcım** : Kodlayan Yapımcıyı ve YouTube Kanalını Görürsünüz.\n • | **${ayarlar.prefix}satınal** : Bot Satın Almak İçin Paneli Görüntülersiniz.\n`)  
       .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=734158113476968579&scope=bot&permissions=2146958847)  **|** [Web Sitemiz](sitedahayokyakında.com/)`)
        .setFooter(`SoyHex | Bot Sürümü : v0.1 | Varsayılan Prefix : s!`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot'],
  permLevel: 0,
};

exports.help = {
  name: 'bot',
  description: '',
  usage: ''
};