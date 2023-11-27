const Discord = require('discord.js');

exports.run = async (client, message, args,bot) => {

const emb = new Discord.MessageEmbed()
.setColor("BLUE")
.setFooter(client.user.username,client.user.avatarURL())
.setTimestamp()
.setTitle(`***__${client.user.username} Rol Koruma Sistemi__***`)
.setDescription(`<a:okey2:1169016423658565805> ***Detaylı Rol Koruma Sistem Bilgilendirmesi***`)
.addField(`<a:kilit:1178729393246437457> **Açılan Rol Koruma**`,"*Açılan rolleri otomatik olarak kapatır.*\n*Rolü açan yetkiliye işlem uygulamaz.* \n\n `.açılan-rol-koruma`")
.addField(`<a:kilit:1178729393246437457> **Düzenlenen Rol Koruma**`,"*Düzenlenen rolleri eski haline getirir.*\n*Düzenleyen yetkiliye işlem uygulamaz.* \n\n `.duzenlenen-rol-koruma`")
.addField(`<a:kilit:1178729393246437457> **Silinen Rol Koruma**`,"*Silinen rolleri otomatik olarak tekrar açar.*\n*Silen yetkiliden tüm rollerini alır.* \n\n `.silinen-rol-koruma`")
.addField(`<a:kilit:1178729393246437457> **Rol Log**`,"*Yukarıda belirtilen işlemlerin kayıtlarını belirtilen kanala gönderir.*\n\n `.rol-log`")



if(!args[0]) return message.channel.send(emb)
message.channel.send(emb)


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rol-koruma"],
  permLevel: 0
}

exports.help = {
  name: 'rol-koruma'
};
