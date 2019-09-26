import QltTiemKiem from './components/Index.vue'

const Vue3Component = {
    install: function(Vue){
        Vue.component(QltTiemKiem.name, QltTiemKiem);
    }
    
}

export default Vue3Component 

export { Vue3Component }

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Vue3Component)
}