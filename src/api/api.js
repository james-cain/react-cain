import Server from './server';

class API extends Server {

    async getNotice(params = {}) {
        try {
            let result = await this.axios('get', '/api/notice/json/', params);
            if (result && result.code === 0) {
                return result.data;
            } else {
                let err = {
                    tip: '获取系统公告失败',
                    response: result,
                    data: params,
                    url: '/api/notice/json/'
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }

    /**
     * 获取短信验证码
     * @method post
     * @param 
     */
    async getSms(params = {}) {
        try {
            let result = await this.axios('post', '/sendsms', params);
            if (result && result.code === 0) {
                return result.data;
            } else {
                let err = {
                    tip: '获取短信验证码失败',
                    response: result,
                    data: params,
                    url: '/sendsms'
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }

    /**
     * 更新用户信息
     * @method put
     * @param {*} params 
     */
    async updateCurrentUser(params = {}) {
        try {
            let result = await this.axios('put', '/api/user/json/current', params);
            if (result) {
                return result.data;
            } else {
                let err = {
                    tip: '更新失败',
                    response: result,
                    data: params,
                    url: '/api/user/json/current'
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }
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
                    url: '/api/user/json/current'
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
                    url: '/api/wechat/jsapi/signature/json'
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
                    url: '/api/creditcardorders/json/'
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

    /**
     * 返回上级用户信息
     * 
     */
    async getGrandUserInfo(params = {}) {
        try {
            let result = await this.axios('get', '/api/user/json/parent');
            if (result && result.code === 0) {
                return result.data;
            } else {
                let err = {
                    tip: '获取上级用户信息失败',
                    response: result,
                    data: params,
                    url: '/api/user/json/parent'
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }

    /**
     * 获取订单详情
     */
    async getCreditcardorders() {
        try {
            let result = await this.axios('get', '/api/creditcardorders/json/');
            if (result) {
                console.log(result);
                return result.data;
            } else {
                let err = {
                    tip: '订单详情信息',
                    response: result,
                    data: {},
                    url: '/api/creditcardorders/json/'
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }

    /**
     * 返回下单
     *  
     */
    async getUpgrade(params = {}) {
        try {
            let result = await this.axios('post', '/api/user/upgrade/wechatpay/json', params);
            if (result) {
                return result.data;
            } else {
                let err = {
                    tip: '获取权限信息失败',
                    response: result,
                    data: params,
                    url: '/api/user/upgrade/wechatpay/json'
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }
}

export default new API();
