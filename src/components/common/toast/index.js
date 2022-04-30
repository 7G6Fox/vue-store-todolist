import myToast from '@/components/common/toast/myToast'

const toast = {}
    //当use时，会调用这里的install方法
toast.install = function(Vue) {
    const toastConstructor = Vue.extend(myToast);
    const toast = new toastConstructor();
    toast.$mount(document.createElement('div'));
    document.body.appendChild(toast.$el);
    Vue.prototype.$toast = toast;
}

export default toast