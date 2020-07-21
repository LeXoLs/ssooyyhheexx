const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

let botid = "702922751962382449"; //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("BLUE")
    .setTitle(`${client.user.username} - Oyun Listesi`)
    .setDescription(
      `• | **${ayarlar.prefix}kelime-tahmini** : Bot İle Kelime Tahmin Yarışması Oynarsınız  \`( #BETA )\`.\n • | **${ayarlar.prefix}adamasmaca** : Bot İle Adam Asmaca Oynarsınız. \`( #BETA )\`\n • | **${ayarlar.prefix}tkm** : İstediğiniz Kişiyle Taş, Kağıt Ve Makas Oynarsınız!  \`( #KULLANILAMAZ BOZUK )\`.\n • | **${ayarlar.prefix}düello** : İstediğiniz Kişiyle Düello Atarsınız \`( #FULL )\`.\n • | **${ayarlar.prefix}sayı-tahmini** : Bot İle Sayı Tahmini Oynarsınız. \`( #BETA )\``
    )
   .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=734158113476968579&scope=bot&permissions=2146958847)  **|** [Web Sitemiz](sitedahayokyakında.com/)`)
    .setFooter(
      `SoyHex | Bot Sürümü : v0.1 | Varsayılan Prefix : s!`,
      client.user.avatarURL
    );
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oyunlar"],
  permLevel: 0
};

exports.help = {
  name: "oyun",
  description: "",
  usage: ""
};
