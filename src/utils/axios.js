import Axios from 'axios';
import router from '../router';
import QS from 'qs'
import {Message, Loading} from 'element-ui';

const codeSign = {
    SUCCESS: 200,
    FORBID: 403,
    NO_TOKEN: 401,
    ERROR: 500
}
let http = Axios.create({
    baseURL: process.env.VUE_APP_URL+process.env.VUE_APP_API,
    withCredentials: true,
    responseType: 'json',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
});
let loadingCount = 0
//  请求拦截
http.interceptors.request.use(config => {
    if (localStorage.getItem('token')) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        // config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
}, err => {
    Message.error({message: '请求超时!'});
    return Promise.resolve(err);
})
//  响应拦截
http.interceptors.response.use(res => {
    if (res.data.code === codeSign.SUCCESS) {
        return res.data.data
    } else if (res.data.code === codeSign.NO_TOKEN) {
        Message.error({message: '去登陆！'});
        return Promise.reject(res);
    } else {
        return Promise.reject(res);
    }
}, err => {
    if (err.response.status === 504 || err.response.status === 404) {
        Message.error({message: '服务器被吃了⊙﹏⊙∥'});
    } else if (err.response.status === 403) {
        Message.error({message: '权限不足,请联系管理员!'});
    } else {
        Message.error({message: '未知错误'});
    }
    return Promise.reject(err);
})
export const postRequest = (url, params,loading=false) => {
    return new Promise((resolve, reject) => {
        if (loading){
            loadingCount++
            Loading.service({text: "Loading..."});
        }
        if (process.env.NODE_ENV==='development'){
            console.log(`${new Date()}__${url}__${JSON.stringify(params)}`)
        }
        http({
            method: 'post',
            url: `${url}`,
            data: QS.stringify(params),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res=>{
            if (loading){
                loadingCount--
                if (loadingCount <= 0) {
                    Loading.service().close();
                }
            }
            resolve(res)
        }).catch(res=>{
            if (loading){
                loadingCount--
                if (loadingCount <= 0) {
                    Loading.service().close();
                }
            }
            reject(res)
        })
    });
}