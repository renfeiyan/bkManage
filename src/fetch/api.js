import axios from 'axios'

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data)
            })
            .catch((error) => {
                console.log(error)
                reject(error)
            })
    })
}
export default {
    /* 这里可以写多个方法，还是快乐的方法！！*/
    getList() {
        return fetch('/getUserInfo')
    }
    // addUserList() {
    //     return fetch('/user/add')
    // }
}