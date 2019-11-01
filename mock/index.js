//引入express
let express = require('express')
//引入mock
let Mock = require('mockjs')
//实例化express
const app = express();

// post请求体相关
let bodyParser = require('body-parser')
// mock数据API
let loginAPI = require('././login')

app.use(bodyParser.json())

// 允许跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    // 此处根据前端请求携带的请求头进行配置
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
})

// response 回应
// request请求
// 登入
app.post('/login/login', function (req, res) {
    res.json(Mock.mock(loginAPI.loginByUsername(req)))  //把请求作为一个参数，在进行处理
})

// 登出
app.post('/login/logout', function (req, res) {
    res.json(Mock.mock(loginAPI.logout(req)))
})

app.listen('3001', () => {
    console.log('监听端口 3001')
})








