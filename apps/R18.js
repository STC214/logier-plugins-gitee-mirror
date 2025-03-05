
export class example extends plugin {
  constructor() {
    super({
      name: '[鸢尾花插件]三次元',
      dsc: '三次元',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#?(三次元)$',
          fnc: '三次元'
        },
      ]
    });
      }





      async 三次元 (e) {

        e.reply([segment.image(newsimageUrl)]);
    
        return true
      }
    
    }

const newsimageUrl = 'https://ap.atxrom.com/r18';// 三次元接口地址 自己用