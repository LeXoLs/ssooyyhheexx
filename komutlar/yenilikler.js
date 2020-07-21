const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('702922751962382449') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Yapılan Yenilikler`)
        .setDescription(` **• \`s!yardım\` Menüsü Düzenlendi,Tüm Komutların Açıklaması Eklendi.\n• Ayarlanabilir Kayıt Sistemi Eklendi : \`s!kayıtsistemi\`\n• Bazı Oyunlar Eklendi : \`s!oyunlar\` \n• Bazı Komut Bugları Düzeltildi.\n• Botun Gecikme Süresi Azaltıldı.\n\n• SoyHex v0.2 Sürümüyle Karşınızda !**`)  
        .setThumbnail(client.user.avatarURL)
          .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=734158113476968579&scope=bot&permissions=2146958847)  **|** [Web Sitemiz](sitedahayokyakında.com/)`)      .setFooter(`SyreX | Bot Sürümü : v0.2 | Varsayılan Prefix : s!`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenilikler','yeni'],
  permLevel: 4,
};

exports.help = {
  name: 'yenilik',
  description: '',
  usage: ''
};