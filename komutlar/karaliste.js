const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(cclient, message, args) => {

if(message.author.id !== "447068066271068161") if(message.author.id !== "756976908897484892") return message.channel.send(":x: Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send(":x: Bir kullanıcı belirtmelisin!")
let csebep = args.slice(1).join(' ')
if(!csebep) return message.channel.send(":x: Bir sebep belirtmelisin!")

message.channel.send(":x: **"+cuser.tag+"** kullanıcısı **"+csebep+"** sebebinden başarıyla karalisteye alındı.✅ ")
const elminstêr = new Discord.MessageEmbed()
.setColor(`RED`)
.setTimestamp()
.setFooter('İnviteManagerBot')
.setDescription(`**${cuser.tag}** kullanıcısı **${csebep}** sebebinden karalisteye alındı. ✅`)
cclient.channels.cache.get("786650710380642334").send(elminstêr)
db.set(`ckaraliste.${cuser.id}`, csebep)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'karaliste',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };