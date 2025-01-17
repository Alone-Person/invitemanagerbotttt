const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
let sa = await db.fetch(`sillog_${message.guild.id}`)
      let silmek = args[0]

  if (!silmek) return message.reply(':x: Bir Sayı Gırmelısın!')
  if (isNaN(silmek)) return message.reply(':x: Rakam Gırmelısın !')
  if (silmek < 0) return message.reply(':x: 0 dan Küçük Değer Belirtemezssin')
  if(silmek > 100) return message.reply(':x: 100 den büyük bir değer belirtemezssin')
  
  
  message.channel.bulkDelete(silmek).then(() =>  {
    let embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setThumbnail(message.author.avatarURL({dynamic:true}))
    .setDescription(`
Silen Kişi : ${message.author.tag}

Kanal : ${message.channel} 

Silinen Miktar : **${silmek}** ✅

`)
    .setFooter('İnviteManagerBot Sil Komutu!')
 message.channel.send(embed).then(message => message.delete({timeout:5000})); 

  })
  
 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["clear","temizle"],
  permLevel: 2
};

exports.help = {
  name: 'sil'
};