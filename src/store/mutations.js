//mutation.js

import state from "./state"

// 第一个参数默认接收state对象
let increment = (state) => {
    state.count++
}
let decrement = (state) => {
    state.count--
}
// sidebar折叠
let handleIsCollapse = () => {
    state.isCollapse = !state.isCollapse;
}
export default {
    increment,
    decrement,
    handleIsCollapse
}