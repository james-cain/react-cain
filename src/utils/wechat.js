import API from '@/api/api';

class WeApi {
    async getSignatrue(params = {}) {
        let wechatConfig = API.getSignature({
            params
        });
        if (wechatConfig) {
            console.log(wechatConfig);
            return wechatConfig;
        }
    }
}

export default new WeApi();