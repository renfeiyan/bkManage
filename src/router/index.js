import Vue from 'vue'
import Router from 'vue-router'

// import Login from './../views/login/login'
// import userInfo from './../views/userInfos/userInfo'
// import test1 from './../views/test/test1'
// import test2 from './../views/test/test2'
// import test3 from './../views/test/test3'
// import test4 from './../views/test/test4'

Vue.use(Router);
const index = () => import('./../views/index');

const routes = [
    {
        path: '/',
        name: '登录',
        component: index
    }, {
        path: '/index',
        name: '主页',
        component: index
    }
];

export default new Router({
    routes: routes
})
