import axios from "axios";
//封装axios
export function request(config) {
    //1、创建实例
    const instance = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/hy66',
            timeout: 5000
        })
        //2、axios的拦截器
    instance.interceptors.request.use(
        config => {
            console.log('请求拦截');
            //过滤不符合服务器的要求
            //请求动画可以在这里写
            //某些特殊请求需要卸载一些特殊的信息  
            return config
        }, err => {
            console.log('请求拦截失败', err);
        })

    instance.interceptors.response.use(
            res => {
                console.log('响应拦截');
                return res.data
            }, err => {
                console.log('响应拦截失败', err);
            }
        )
        //3、发送真正的网络请求
    return instance(config);
}