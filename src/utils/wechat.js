import API from '@/api/api';

class WeApi {
    async getSignatrue(params = {}) {
        let wechatConfig = await API.getSignature({
            params
        });
        
        /* eslint no-undef: 0 */
        wx.config({
            debug: true,
            appId: wechatConfig.appId,
            timestamp: wechatConfig.timestamp,
            nonceStr: wechatConfig.nonceStr,
            signature: wechatConfig.signature,
            jsApiList: ['onMenuShareTimeline', 'checkJsApi']
        });

        if (wechatConfig) {
            console.log(wechatConfig);
            return wechatConfig;
        }
    }
}

export default new WeApi();