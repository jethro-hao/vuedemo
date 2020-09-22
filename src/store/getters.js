// getters.js
// 第一个参数是state
let address = (state) => {
    return '国籍:' + state.from
}
// 第二个参数可以访问getters
let addressMore = (state, getters) => {
    return '其他描述' + getters.address
}
// return 一个function,这个function可以传参,当然这个function最后会返回一个具体的数值
//本例中这个方法用于查询state中的arr数组是否存在某个值
let findArr = (state) => (number) => {
    let ifExit = state.arr.find((n) => n === number) // arr.find是ES6语法中数组的扩展
    if (typeof (ifExit) === 'undefined') {
        return false
    } else {
        return true
    }
}
let findArr2 = function (state) {
    // 返回一个匿名函数
    return function (number) {
        // 如果有相同的则返回n，如果找不到则返回undefined
        let ifExit = state.arr.find(function (n) {
            return n === number
        })
        if (typeof (ifExit) === 'undefined') {
            return false
        } else {
            return true
        }
    }
}
export {
    address,
    addressMore,
    findArr,
    findArr2
}