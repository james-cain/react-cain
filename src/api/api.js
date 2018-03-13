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
}

export default new API();
