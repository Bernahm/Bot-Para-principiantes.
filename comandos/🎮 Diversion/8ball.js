const Discord = require('discord.js');

module.exports = {
  name: "8ball",
  alias: ["bola8"],
  desc: "Manda una respuesta a tu pregunta.",
  run: async (client, message, args) => {

  const pregunta = args.join(' ')
  if(!pregunta) return message.channel.send('Debes escribir lo que vas a preguntar')

  let respuestas = ['si', 'no', 'Supongo', 'No lo se.', 'idk', 'quizás', 'ojala...', 'La area 51 dice que si', 'Definitivamente', 'Obiamente', 'nope', 'No gracias, no podré hacerlo.', '¡De ningún modo!', 'Es cierto.', 'uf...', 'nunca']

  const repuestafinal = respuestas[Math.floor(Math.random() * respuestas.length)]

const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} esto cierra tu pregunta?`)
        .addField("Tu pregunta", `${pregunta}`)
        .addField("Mi respuesta", `${repuestafinal}`)
        .setColor("RANDOM");

  message.channel.send({embeds: [embed]});

  }

}