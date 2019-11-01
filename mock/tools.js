module.exports = function param2Obj(url) {
    const search = url.split('?')[1]    //取出问号后面那一个
    if (!search) {
        return {}
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')   //替换一个与正则表达式匹配的子串
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
        '"}'
    )
}
