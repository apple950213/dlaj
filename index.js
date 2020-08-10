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