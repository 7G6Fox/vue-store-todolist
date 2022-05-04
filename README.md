# 有两个项目，一个是商城一个是todolist，我分了不同的文件
感谢王红元老师提供接口！我的商城是自己敲的，布局、样式、实现，icon引用和老师的都不一样，照着参考可能会有点费劲，简单加了一下登录与注册功能，增加弹窗组件，完善了一些业务。

## 目录结构
```
├─assets
│  ├─css
│  │  └─mall
│  ├─iconfont
│  └─imgs
│      └─shop
│          └─center
├─components
│  ├─common
│  │  ├─diolog
│  │  ├─scroll
│  │  ├─swiper
│  │  ├─tab
│  │  ├─tabControl
│  │  └─toast
│  └─shop
├─network
├─router
├─store
└─view
    └─demo
        ├─mall
        │  ├─categoryCom
        │  ├─childCom
        │  └─detailCom
        └─todolist
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
