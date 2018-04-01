import API from '@/api/api';

class WeApi {
    async getSignatrue(params = {}) {
        let wechatConfig = await API.getSignature({
            params
        });
        
        /* eslint no-undef: 0 */
        wx.config({
            appId: wechatConfig.appid,
            timestamp: wechatConfig.timestamp,
            nonceStr: wechatConfig.noncestr,
            signature: wechatConfig.signature,
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareQZone',
                'chooseWXPay'
            ]
        });

        if (wechatConfig) {
            return wechatConfig;
        }
    }

    async getUpgrade(params = {}) {
        let prePayInfo = await API.getUpgrade({
            params
        });
        return prePayInfo;
    }
}

export default new WeApi();
