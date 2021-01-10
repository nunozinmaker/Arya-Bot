let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Arya274/Arya-Bot')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
🤖 [NUNO BOT] 🤖
By: @nuno.apenass

Hi, ${name} 👋
Experiência: ${exp}

📟 Tempo: ${time}
📆 Data: ${week}, ${date}

${more.repeat(1000)}

Como adicionar xp:
+1 Exp/mensagem normal
+10 Exp/comandos

╠═════✪〘 Menu 〙✪═══
║
╠═〘 Xp 〙 ═
╠➥ ${_p}Entre os melhores [jumlah user]
║
╠═〘 Comandos 〙 ═
╠➥ ${_p}menu
╠➥ ${_p}help
╠➥ ${_p}?
║
╠═〘 Outros 〙 ═
╠➥ ${_p}qr <texto>
╠➥ ${_p}sticker <marca a foto>
╠➥ ${_p}toimg (marca a figurinha)
║
╠═〘 Grupos 〙 ═
╠➥ ${_p} add [62xxxxxxxxx]
╠➥ ${_p} promote [@tagmember]
╠➥ ${_p} demote [@tagadmin]
╠➥ ${_p} linkgroup
╠➥ ${_p} listonline
╠➥ ${_p} kick @Member
╠➥ ${_p} grouplist
║
╠═〘 Dono 〙 ═
╠➥ ${_p}deletechat (chat grup)
╠➥ ${_p}deletechat group
╠➥ ${_p}mutechat (chat grup)
╠➥ ${_p}mutechat group
║
╠═〘 PROPAGANDA 〙 ═
╠➥ Instagram: @nuno.apenass
║
╠═〘 Info Bot 〙 ═
╠➥ Name : Nuno Bot
╠➥ Feito no termux
╠➥ Dúvidas? HTTPS://WA.me/553398445380
╠═════
║ Advanced:
║  > return m
║
╠═〘 NUNO BOT 〙═
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
