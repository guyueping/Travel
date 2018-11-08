import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)


export default new Vuex.Store({
    state,
    mutations,
    //类似于computed属性，当需要根据state里面的数据
    //算出一些新的数据的时候使用getter,避免冗余
    getters: {
        doubleCity (state) {
            return state.city + 'xxx'
        }
    }
})