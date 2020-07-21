const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('702922751962382449') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Sistem Komutları Listesi`)
        .setDescription(` • | **${ayarlar.prefix}korumasistemi** : Bütün Koruma Komutlarını Listelersiniz.\n• | **${ayarlar.prefix}otorolsistemi** : Otorol Komutlarını Listelersiniz.\n • | **${ayarlar.prefix}sayaçsistemi** : Sayaç Komutlarını Listelersiniz.\n • | **${ayarlar.prefix}ototagsistemi** : Otomatik Tag Komutlarını Listelersiniz.\n • | **${ayarlar.prefix}sa-as** : Otomatik Selamlaşmayı Açıp Kapatırsınız.\n • | **${ayarlar.prefix}hg-bb** : Özelden Gönderilen Otomatik Karşılama ve Uğurlama Komutunu Açıp Kapatırsınız.`)  
               .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=734158113476968579&scope=bot&permissions=2146958847)  **|** [Web Sitemiz](sitedahayokyakında.com/)`)
  .setFooter(`SoyHex | Bot Sürümü : v0.2 | Varsayılan Prefix : s!`, client.user.avatarURL)

    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sistem'],
  permLevel: 0,
};

exports.help = {
  name: 'sistem',
  description: '',
  usage: ''
};