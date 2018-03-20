import axios from 'axios';

export default class Server {
    axios(method, url, params) {
        return new Promise((resolve, reject) => {
            if (typeof params !== 'object') params = {};
            let _option = {
                method,
                url,
                // baseURL: 'http://b.posfz.com/',
                timeout: 30000,
                params: null,
                data: null,
                headers: null,
                // withCredentials: true,
            };
            Object.keys(params).forEach((obj) => {
                _option = Object.assign({}, _option, params[obj]);
            });
            axios.request(_option).then(res => {
                resolve(typeof res.data === 'object' ? res.data : JSON.parse(res.data));
            }).catch(error => {
                if (error.response) {
                    reject(error.response.data);
                } else {
                    reject(error);
                }
            });
        })
    }
}