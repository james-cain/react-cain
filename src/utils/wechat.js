import API from '@/api/api';

class WeApi {
    async getSignatrue(params = {}) {
        let wechatConfig = await API.getSignature({
            params
        });
        
        /* eslint no-undef: 0 */
        wx.config({
            debug: true,
            appId: wechatConfig.appid,
            timestamp: wechatConfig.timestamp,
            nonceStr: wechatConfig.noncestr,
            signature: wechatConfig.signature,
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareQZone'
            ]
        });

        if (wechatConfig) {
            return wechatConfig;
        }
    }
}

export default new WeApi();
