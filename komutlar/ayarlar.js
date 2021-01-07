const Discord = require("discord.js");
const Database = require("../Helpers/Database");
// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 **/
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MANAGE_GUILD")) return message.reply(":x: Bu İşlemi Gerçekleştirmek İçin **Yönetici** Yetkisine İhtiyacın Var!")
    if(args.length <= 0) return message.reply("Lütfen Değişken Belirtiniz \n> `welcomeMessage, leaveMessage, defaultMessage`, Bu Değişkenleri Görmek İçin `inv!yardım`");
   
    var arg = args[0].toLocaleLowerCase();
     var types = ["leaveMessage", "welcomeMessage", "defaultMessage","Channel"];

    var type = types.find(_type => _type.toLocaleLowerCase() == arg);
    if(!type) return message.reply("Lütfen Değişken Belirtiniz \n> `welcomeMessage, leaveMessage, defaultMessage`, Yazarak Bakınız");

    const db = new Database("./Servers/" + message.guild.id, "Settings");
    db.set(`settings.${type}`, args.splice(1).join(" "));

    message.reply(` ✅ Başarıyle Belirttiğiniz Ayarı Yaptınız!`);
};
exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['ayarlar','ayar','options'],
 
  permLevel: 0

};
exports.help = {
  name: 'ayarlar',
  description: 'Ayarlar Cekersiniz',
  usage: 'ayarlar çek'
};