import Server from './server';

class API extends Server {
    /**
     * 返回微信授权后信息
     * @method get
     * @param {*} params 
     * @return {promise}
     */
    async getCurrentUser(params = {}) {
        try {
            let result = await this.axios('get', '/api/user/json/current');
            if (result) {
                return result.data;
            } else {
                let err = {
                    tip: '授权失败',
                    response: result,
                    data: params,
                    url: 'http://b.posfz.com/api/user/json/current'
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }

    /**
     * 返回config权限配置信息
     *  
     */
    async getSignature(params = {}) {
        try {
            let result = await this.axios('post', '/api/wechat/jsapi/signature/json', params);
            if (result) {
                return result.data;
            } else {
                let err = {
                    tip: '获取权限信息失败',
                    response: result,
                    data: params,
                    url: 'http://b.posfz.com/api/wechat/jsapi/signature/json'
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }

    /**
     * 生成申请银行卡记录
     *  
     */
    async produceApplyInfo(params = {}) {
        try {
            let result = await this.axios('post', '/api/creditcardorders/json/', params);
            if (result) {
                return result.data;
            } else {
                let err = {
                    tip: '生成申请银行卡记录失败',
                    response: result,
                    data: params,
                    url: 'http://b.posfz.com/api/creditcardorders/json/'
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }
    
    /**
     * 返回贷款银行配置信息
     *  
     */
    async getApplyBanks(params = {}) {
        try {
            let result = await this.axios('get', '/api/bank/json/');
            if (result && result.code === 0) {
                return result.data;
            } else {
                let err = {
                    tip: '获取权限信息失败',
                    response: result,
                    data: params,
                    url: '/api/bank/json/'
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }
}

export default new API();
