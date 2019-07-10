import axios from 'axios';
import * as qs from 'qs';

declare const SERVICE: string;

axios.defaults.baseURL = SERVICE;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';

// qs 序列化 防止XSRF攻击 可以对深层次的json array进行序列化
axios.interceptors.request.use((config: any): any => {
    if (config.url.indexOf('?') !== -1) {
        config.url += `&t=${new Date().getTime()}`;
    } else {
        config.url += `?t=${new Date().getTime()}`;
    }
    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    config.transformRequest = [(data: any, headers: any) => {
        return qs.stringify(data, {
            allowDots: true
        })
    }];
    // `paramsSerializer` 是一个负责 `params` 序列化的函数
    config.paramsSerializer = (params: any) => {
        return qs.stringify(params, {
            arrayFormat: 'repeat'
        })
    };
    return config;
}, (error: any) => {
    return Promise.reject(error);
});

axios.interceptors.response.use((response: any): any => {
    const { data } = response;
    if(data.code === -2){
        console.log('未登陆');
    }
    return response;
}, (error: any) => {
    Promise.reject(error);
});

export default axios;