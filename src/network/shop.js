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

function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

function getRecommend() {
    return request({
        url: "/recommend"
    })
}
export { getHomeMultidata, getHomeGood, getDetail, getRecommend }

export class GoodInfo {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns; //数组存储销量、收藏
        this.services = services;
        this.nowPrice = itemInfo.highNowPrice;
        this.realPrice = itemInfo.lowNowPrice;
    }
}
export class ShopInfo {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.score = shopInfo.score;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.goodsCount = shopInfo.cGoods;
    }
}

export class GoodsParam {
    constructor(info, rule) {
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}