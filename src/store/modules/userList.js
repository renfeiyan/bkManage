import api from './../../fetch/api'
import axios from 'axios'

const userList = {
    state: {
        userListData: [],
        FormVisible: false
    },
    mutations: {
        SET_DATELIST: (state, res) => {
            state.userListData = res.data;
        },
        CHANGE_VISIBLE: (state) => {
            state.FormVisible = !state.FormVisible;
        },
        ADD_USERLIST: (state, res) => {
            state.userListData = res;
        }
    },
    actions: {
        getList({commit}) {
            api.getList().then(res => {
                commit('SET_DATELIST', res);
            })
        },
        addUserList({commit, state}, data) {
        //    api.addUserList().then(res =>{
        //        commit('ADD_USERLIST', [...state.userListData, res]);
        //    })
            return new Promise((resolve, reject) => {
                axios.post('/user/add', data).then(() => {
                    commit('ADD_USERLIST', [...state.userListData, data]);
                    resolve();
                }).catch(e => {
                    console.log(e);
                    reject();
                })
            })
        }
    },
    getters: {}
};

export default userList