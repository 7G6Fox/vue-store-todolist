import { request } from "./request";

function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

function getHomeGood(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}

export { getHomeMultidata, getHomeGood }