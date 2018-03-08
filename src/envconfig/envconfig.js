// 全局配置文件
let baseURL;
let imgURL = '/';
if (process.env.NODE_ENV === 'development') {
    baseURL = '/';
} else {
    baseURL = '/';
}

export default { imgURL, baseURL };