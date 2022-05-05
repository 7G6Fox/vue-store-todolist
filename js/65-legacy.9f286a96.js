"use strict";(self["webpackChunkt"]=self["webpackChunkt"]||[]).push([[65],{9065:function(t,e,s){s.r(e),s.d(e,{default:function(){return tt}});var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"goodDetail"}},[o("topNav",{staticClass:"goodNav",attrs:{color:"#fff",fontcolor:"black"}},[o("img",{attrs:{slot:"left",src:s(5811)},on:{click:t.goBack},slot:"left"}),o("p",{staticClass:"row_flex",attrs:{slot:"center"},slot:"center"},t._l(t.bannerList,(function(e,s){return o("span",{key:s,class:{active:s===t.bannerIndex},on:{click:function(e){return t.goodActive(s)}}},[t._v(" "+t._s(e)+" ")])})),0)]),o("Scroll",{ref:"scroll",staticClass:"scroll",attrs:{probeType:3,distance:t.distance}},[o("Swiper",{staticClass:"img-swiper"},t._l(t.imgList,(function(e,s){return o("SwiperItem",{key:s},[o("img",{attrs:{src:e},on:{load:t.detailImgLoad}})])})),1),o("ShowInfo",{attrs:{goodInfo:t.goodInfo}}),o("ShopDetail",{attrs:{shopInfo:t.shopInfo}}),o("GoodsDetail",{attrs:{detailInfo:t.detailInfo},on:{imageLoad:t.imageLoad}}),o("DetailParams",{ref:"params",attrs:{paramInfo:t.paramInfo}}),o("DetailComment",{ref:"comments",attrs:{commentInfo:t.commentInfo}}),o("GoodsList",{ref:"recommends",attrs:{goods:t.recommends}})],1),o("ToTop",{directives:[{name:"show",rawName:"v-show",value:t.isBackShow,expression:"isBackShow"}],nativeOn:{click:function(e){return t.backClick.apply(null,arguments)}}}),o("DetailBar",{attrs:{myId:t.iid},on:{addToCar:t.addToCar}})],1)},n=[],i=s(7847),a=s(1882),r=s(8973);s(4916),s(7601),s(5306),s(4603),s(8450),s(8386),s(9714);function l(t,e){var s=null;return function(){for(var o=this,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];s&&clearTimeout(s),s=setTimeout((function(){t.apply(o,i)}),e)}}function c(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var s={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var o in s)if(new RegExp("(".concat(o,")")).test(e)){var n=s[o]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?n:f(n))}return e}function f(t){return("00"+t).substr(t.length)}var d=s(8037),u=s(2077),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.goodInfo).length?s("div",{staticClass:"good-info"},[s("p",[t._v(t._s(t.goodInfo.title))]),s("p",{staticClass:"price"},[s("em",[t._v(t._s(t.goodInfo.price))]),s("s",[t._v(t._s(t.goodInfo.oldPrice))]),s("sup",{directives:[{name:"show",rawName:"v-show",value:t.goodInfo.discount,expression:"goodInfo.discount"}]},[t._v(t._s(t.goodInfo.discount))])]),s("p",{staticClass:"row_flex"},[s("span",[t._v(t._s(t.goodInfo.columns[0]))]),s("span",[t._v(t._s(t.goodInfo.columns[1]))]),s("span",[t._v(t._s(t.goodInfo.services[t.goodInfo.services.length-1].name))])]),s("p",{staticClass:"row_flex info-service"},t._l(t.goodInfo.services.length-2,(function(e){return s("span",{key:e},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.goodInfo.services[e].icon,expression:"goodInfo.services[index].icon"}],attrs:{src:t.goodInfo.services[e].icon}}),t._v(" "+t._s(t.goodInfo.services[e].name)+" ")])})),0)]):t._e()},h=[],p={name:"ShowInfo",props:{goodInfo:{type:Object,default:function(){return{}}}}},g=p,v=s(1001),I=(0,v.Z)(g,m,h,!1,null,"325940d0",null),_=I.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.shopInfo).length?s("div",{staticClass:"shop-detail"},[s("div",{staticClass:"shop-top"},[s("img",{attrs:{src:t.shopInfo.logo}}),t._v(" "+t._s(t.shopInfo.name)+" ")]),s("div",{staticClass:"shop-middle row_flex"},[s("div",{staticClass:"shop-left"},[s("span",[s("p",[t._v(t._s(t._f("sellCountFilter")(t.shopInfo.sells)))]),s("p",[t._v("总销量")])]),s("span",[s("p",[t._v(t._s(t.shopInfo.goodsCount))]),s("p",[t._v("全部宝贝")])])]),s("div",{staticClass:"shop-right"},t._l(t.shopInfo.score,(function(e,o){return s("p",{key:o,staticClass:"shop-score"},[s("span",[t._v(t._s(e["name"]))]),s("span",{staticClass:"score",class:{"better-more":e["isBetter"]}},[t._v(" "+t._s(e["score"]))]),s("span",{staticClass:"highOrlow",class:{higher:e["isBetter"]}},[t._v(" "+t._s(e["isBetter"]?"高":"低")+" ")])])})),0)]),s("input",{attrs:{type:"button",value:"进店逛逛"}})]):t._e()},y=[],w=(s(6977),{name:"ShopDetail",props:{shopInfo:{type:Object,default:function(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}}),k=w,b=(0,v.Z)(k,C,y,!1,null,"0456fe6c",null),$=b.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detailInfo).length&&null!==t.detailInfo.detailImage[0].list?s("div",{staticClass:"detail-goods"},[s("div",{staticClass:"info-desc"},[s("span",{staticClass:"start"}),s("span",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),s("span",{staticClass:"end"})]),s("div",{staticClass:"info"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),s("div",{staticClass:"img-list"},t._l(t.detailInfo.detailImage[0].list,(function(e,o){return s("img",{key:o,attrs:{src:e},on:{load:t.imgLoad}})})),0)]):t._e()},x=[],L={name:"DetailGoods",props:{detailInfo:{type:Object,default:function(){return{}}}},data:function(){return{counter:0,imgLength:0}},methods:{imgLoad:function(){++this.counter===this.imgLength&&this.$emit("imageLoad")}},watch:{detailInfo:function(){this.imgLength=this.detailInfo.detailImage[0].list.length}}},S=L,D=(0,v.Z)(S,T,x,!1,null,"704fa28a",null),O=D.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?s("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(e,o){return s("table",{key:o,staticClass:"info-size"},t._l(e,(function(e,o){return s("tr",{key:o},t._l(e,(function(e,o){return s("td",{key:o},[t._v(t._s(e))])})),0)})),0)})),s("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(e,o){return s("tr",{key:o},[s("td",{staticClass:"info-param-key"},[t._v(t._s(e["key"]))]),s("td",{staticClass:"param-value"},[t._v(t._s(e["value"]))])])})),0),0!==t.paramInfo.image.length?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},Y=[],B={name:"DetailParams",props:{paramInfo:{type:Object,default:function(){return{}}}}},Z=B,j=(0,v.Z)(Z,E,Y,!1,null,"6d8aaf15",null),N=j.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info"},[t._m(0),s("div",{staticClass:"info-user"},[s("img",{attrs:{src:t.commentInfo.user.avatar}}),s("span",[t._v(" "+t._s(t.commentInfo.user.uname)+" ")])]),s("div",{staticClass:"info-detail"},[s("p",[t._v(t._s(t.commentInfo.content))]),s("div",{staticClass:"info-other"},[s("span",[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),s("span",[t._v(t._s(t.commentInfo.style))])])]),s("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return s("img",{key:e,attrs:{src:t}})})),0)]):t._e()},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"comment"},[s("strong",[t._v("用户评价")]),s("span",[t._v("查看更多 "),s("i",{staticClass:"arrow-right"},[t._v(">")])])])}],R={name:"DetailComment",props:{commentInfo:{type:Object,default:function(){return{}}}},filters:{showDate:function(t){var e=new Date(1e3*t);return c(e,"yyyy-MM-dd")}}},M=R,F=(0,v.Z)(M,G,P,!1,null,"28550af0",null),q=F.exports,A=s(2172),J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-bar"},[s("div",{staticClass:"bar-item bar-left"},[t._m(0),t._m(1),s("div",{on:{click:t.collect}},[s("i",{staticClass:"icon",class:{collected:t.collected}}),s("p",[t._v("收藏")])])]),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"cart",on:{click:t.addToCar}},[t._v("加入购物车")]),s("div",{staticClass:"buy"},[t._v("购买")])])])},z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("i",{staticClass:"icon service"}),s("p",[t._v("客服")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("i",{staticClass:"icon shop"}),s("p",[t._v("店铺")])])}],H=(s(6699),s(2023),s(8862),s(7327),s(1539),{name:"DetailBottomBar",data:function(){return{collected:!1,collectItem:JSON.parse(localStorage.getItem("collectItem"))||[],isLogin:!1}},props:{myId:{type:String,default:function(){return this.$route.query.iid}}},mounted:function(){var t=localStorage.getItem("user")||!1;t&&0!==t.length&&(this.isLogin=JSON.parse(t).isLogin),this.isLogin&&this.collectItem.includes(this.myId)?this.collected=!0:this.collected=!1},watch:{collectItem:{handler:function(t){localStorage.setItem("collectItem",JSON.stringify(t))}}},methods:{collect:function(){var t=this;this.isLogin?(this.collected=!this.collected,null!=this.myId&&(this.collectItem.includes(this.myId)&&!this.collected?this.collectItem=this.collectItem.filter((function(e){return e!==t.myId})):this.collectItem.push(this.myId))):this.$toast.show("请先登录")},addToCar:function(){this.isLogin?this.$emit("addToCar"):this.$toast.show("请先登录")}}}),Q=H,K=(0,v.Z)(Q,J,z,!1,null,"21b17d3f",null),U=K.exports,V={name:"GoodDetail",data:function(){return{bannerList:["商品","参数","评论","推荐"],bannerIndex:0,iid:null,imgList:[],goodInfo:{},shopInfo:{},detailInfo:{},paramInfo:{},commentInfo:{},recommends:[],TopY:0,getTopY:null,isBackShow:!1}},components:{Swiper:i.k,SwiperItem:i.t,Scroll:a.Z,topNav:r.Z,ToTop:d.Z,ShowInfo:_,ShopDetail:$,GoodsDetail:O,DetailParams:N,DetailComment:q,GoodsList:A.Z,DetailBar:U},created:function(){this.getGoodInfo()},mounted:function(){this.iid=this.$route.query.iid,this.getTopY=function(){this.TopY=[],this.TopY.push(0),this.TopY.push(this.$refs.params.$el.offsetTop-50),this.TopY.push(this.$refs.comments.$el.offsetTop-50),this.TopY.push(this.$refs.recommends.$el.offsetTop-50),this.TopY.push(1/0)}},updated:function(){this.$refs.scroll.refresh()},methods:{getGoodInfo:function(){var t=this;this.iid=this.$route.query.iid,(0,u.Nm)(this.iid).then((function(e){var s=e.result;t.imgList=s.itemInfo.topImages,t.goodInfo=new u.n6(s.itemInfo,s.columns,s.shopInfo.services),t.shopInfo=new u.uQ(s.shopInfo),t.detailInfo=s.detailInfo,t.paramInfo=new u.oD(s.itemParams.info,s.itemParams.rule),s.rate.cRate&&(t.commentInfo=s.rate.list[0])})),(0,u.lO)().then((function(e){t.recommends=e.data.list}))},imageLoad:function(){this.$refs.scroll.refresh(),this.getTopY()},goBack:function(){this.$router.back()},backClick:function(){this.$refs.scroll.scrollTop(0,0,1500)},goodActive:function(t){this.bannerIndex=t,this.$refs.scroll.scrollTop(0,-this.TopY[t],400)},distance:function(t){for(var e=-t.y,s=this.TopY.length,o=0;o<s-1;o++)this.bannerIndex!==o&&e>=this.TopY[o]&&e<this.TopY[o+1]&&(this.bannerIndex=o);this.isBackShow=-t.y>1e3},detailImgLoad:function(){var t=this;l((function(){t.$refs.scroll.refresh()}),50)},addToCar:function(){var t=this,e={};e.iid=this.iid,e.img=this.imgList[0],e.title=this.goodInfo.title,e.desc=this.goodInfo.desc,e.newPrice=this.goodInfo.realPrice,e.count=0,e.checked=!1,this.$store.dispatch("addToCar",e).then((function(e){t.$toast.show(e)}))}}},W=V,X=(0,v.Z)(W,o,n,!1,null,"0bddc5f8",null),tt=X.exports},5811:function(t,e,s){t.exports=s.p+"img/back.ca421e22.svg"}}]);
//# sourceMappingURL=65-legacy.9f286a96.js.map