const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '!톰 겐지 우') {
    message.reply('46123V ( 우클 값 ) KEY 마우스 보조키 ( 가속도 2.5 ) 기존 값');
  }
if(message.content === '!톰 겐지 좌') {
    message.reply('7R8LDX ( 좌클 값 ) KEY 마우스 보조키 ( 가속도 3.3 ) 좌클릭 정확도 증가');
  }
if(message.content === '!톰 리퍼 좌') {
    message.reply('O5ULAA ( 좌클릭 값 ) KEY 마우스 좌클');
  }
if(message.content === '!톰 맥 좌') {
    message.reply('RTOI27 ( 좌클릭 값 ) KEY 마우스 보조키 ( 가속도 3.4 ) 정확도 증가');
  }
if(message.content === '!톰 맥크리 좌') {
    message.reply('RTOI27 ( 좌클릭 값 ) KEY 마우스 보조키 ( 가속도 3.4 ) 정확도 증가');
  }
if(message.content === '!톰 메이 우') {
    message.reply('RTOI27 ( 좌클릭 값 ) KEY 마우스 보조키 ( 가속도 3.4 ) 정확도 증가');
  }
if(message.content === '!톰 바스 좌') {
    message.reply('3Z3AE3 ( 좌클릭 값 ) KEY 마우스 좌클릭 / 너무 스무스 해진 에임');
  }
if(message.content === '!톰 솔저 우') {
    message.reply('XYC99Q ( 우클릭 값 ) KEY 마우스 보조키 ( 가속도 2.6 )');
  }
if(message.content === '!톰 솔저 좌') {
    message.reply('UCCSBM ( 좌클릭 값 ) KEY 마우스 좌클릭');
  }
if(message.content === '!톰 솜브라 좌') {
    message.reply('SALVW7 ( 좌클릭 값 ) KEY 마우스 좌클릭 / 더욱 스무스 해진 에임');
  }
if(message.content === '!톰 시메 좌') {
    message.reply('N5Y891 ( 좌클릭 값 ) KEY 마우스 좌클릭 ');
  }
if(message.content === '!톰 시메트라 좌') {
    message.reply('N5Y891 ( 좌클릭 값 ) KEY 마우스 좌클릭 ');
  }
if(message.content === '!톰 애쉬 좌') {
    message.reply('4F16QB ( 좌클릭 값 ) KEY 마우스 좌클릭 ( 가속도 2.3 ) 약간 아쉬워졌지만 스무스 해짐');
  }
if(message.content === '!톰 에코 우') {
    message.reply('J6227R ( 우클릭 값 ) KEY 마우스 우클릭 ( 가속도 2.5 )');
  }
if(message.content === '!톰 에코 좌') {
    message.reply('XY2Q1U ( 좌클릭 값 ) KEY 마우스 좌클릭 ( 가속도 2.7 )');
  }
if(message.content === '!톰 위도우 좌') {
    message.reply('HO8ONV ( 좌클릭 값 ) KEY 마우스 보조키 ( 가속도 2.7 )');
  }
if(message.content === '!톰 정크 좌') {
    message.reply(' M3LY1A ( 좌클릭 값 ) KEY 마우스 보조키 ( 가속도 3 ) 가까이 있는적 보조키 사용');
  }
if(message.content === '!톰 트레 좌') {
    message.reply('14C2IV( 좌클릭 값 ) KEY 마우스 좌클릭 / 더욱 스무스해진 에임');
  }
if(message.content === '!톰 트레 궁') {
    message.reply('49H68O ( 궁극기 ) KEY 마우스 보조키 (가속도 3 ) 부착 확률 증가');
  }
if(message.content === '!톰 트레이서 좌') {
    message.reply('14C2IV( 좌클릭 값 ) KEY 마우스 좌클릭 / 더욱 스무스해진 에임');
  }
if(message.content === '!톰 트레이서 궁') {
    message.reply('49H68O ( 궁극기 ) KEY 마우스 보조키 (가속도 3 ) 부착 확률 증가');
  }
if(message.content === '!톰 파라 좌') {
    message.reply('QUN9DN ( 좌클릭 값 ) KEY 마우스 좌클릭 ( 가속도 3.5 ) 정확도 증가');
  }
if(message.content === '!톰 한조 좌') {
    message.reply('7X83OB ( 좌클 + 보조키 ) KEY 마우스 보조키 (가속도 3 ) 정확도 보안 완료');
  }
if(message.content === '!톰 칸토 목록') {
    message.reply('-준비중-');
  }
  if(message.content == '!help') {
    let helpImg = 'https://cdn.discordapp.com/attachments/742167408646684733/742210889301622954/1.png';
    let commandList = [
      {name: '!톰 칸토 목록', desc: '톰님 칸토값 목록을 봅니다'},
      {name: '!톰 (영웅) (좌,우)', desc: '입력한 영웅의 칸토 값을 봅니다'},
      {name: '!청소 (숫자)', desc: '숫자 만큼 채팅을 삭제합니다'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('KANTO BOT 도움말', helpImg)
      .setColor('#186de6')
      .setFooter(`KANTO BOT`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }
  if(message.content == '!도움') {
    let helpImg = 'https://cdn.discordapp.com/attachments/742167408646684733/742210889301622954/1.png';
    let commandList = [
      {name: '!톰 칸토 목록', desc: '톰님 칸토값 목록을 봅니다'},
      {name: '!톰 (영웅) (좌,우)', desc: '입력한 영웅의 칸토 값을 봅니다'},
      {name: '!청소 (숫자)', desc: '숫자 만큼 채팅을 삭제합니다'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('KANTO BOT 도움말', helpImg)
      .setColor('#186de6')
      .setFooter(`KANTO BOT`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
  if(message.content.startsWith('!청소')) {
    if(checkPermission(message)) return

    var clearLine = message.content.slice('!청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        const _limit = 10;
        let _cnt = 0;

        message.channel.fetchMessages({limit: _limit}).then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
  if(message.content.startsWith('!ㅊㅅ')) {
    if(checkPermission(message)) return

    var clearLine = message.content.slice('!ㅊㅅ '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        const _limit = 10;
        let _cnt = 0;

        message.channel.fetchMessages({limit: _limit}).then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
    
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

client.login(token);