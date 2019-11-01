const Mock = require('mockjs')
const Random = Mock.Random

Mock.mock('/api/getInfo', 'post', () => {
    return {
        code: 1,
        data: [{
            date: '2016-05-03',
            name: 'test',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-02',
            name: 'try',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
})

Mock.mock('/api/getMenu', 'post', () => {
    return {
        code: 1,
        data: [
            {
                name: '后台管理',
                icon: 'el-icon-date',
                path: '/views',
                component: 'views/index',
                children: [{
                    name: '首页',
                    icon: 'el-icon-menu',
                    path: '/index/dashboard',
                    component: 'views/dashboard/index'
                }, {
                    name: '用户列表',
                    icon: 'el-icon-edit',
                    path: '/views/dataManage/userList',
                    component: 'views/dataManage/userList'
                }, {
                    name: '商家列表',
                    icon: 'el-icon-document',
                    path: '/views/dataManage/addUsers',
                    component: 'views/test/test2'
                }, {
                    name: '食品列表',
                    icon: 'el-icon-setting',
                    path: '/views/test/test3',
                    component: 'views/test/test3'
                }]
            }
        ]
    }
});

/* user列表 */
Mock.mock('/api/getUserInfo', 'post', {
        'data|10-20': [
            {
                '_id': /\d{3}/,
                'date': Random.date('yyyy-MM-dd'),
                'name': '@cname',
                'address': Random.city(true),
                'sex|1': [
                    '男',
                    '女'
                ]
            }
        ]
})

Mock.mock('/api/user/add', 'post', {
    data: [
        {
            id: '',
            date: '',
            name: '',
            address: '',
            sex: ''
        }
    ]
});