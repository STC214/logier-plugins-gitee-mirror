export class outNotice extends plugin {
    constructor () {
        super({
            name: '退群通知',
            dsc: 'xx退群了',
            event: 'notice.group.decrease'
        })
        /** 退群提示词 */
        this.tips = '永久的离开了我们'
    }

    async accept() {
        if (this.e.user_id === this.e.self_id) return

        let name, msg
        if (this.e.member) {
            name = this.e.member.card_old || this.e.member.nickname || this.e.member.card
        }
        if (name) {
            msg = `${name}(${this.e.user_id}) ${this.tips}`
        } else {
            msg = `${this.e.user_id} ${this.tips}`
        }
        logger.mark(`[退出通知]${this.e.logText} ${msg}`)
        await this.reply([segment.image(`https://q1.qlogo.cn/g?b=qq&s=0&nk=${this.e.user_id}`),msg ])
    }
}
