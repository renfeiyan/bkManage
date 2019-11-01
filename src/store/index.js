import Vue from 'vue'
import Vuex from 'vuex'
import controlStyle from './modules/controlStyle'
import app from './modules/app'
import dic from './modules/dic'
import getters from './getters'
import userList from './modules/userList'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        controlStyle,
        app,
        userList,
        dic
    },
    getters
});

