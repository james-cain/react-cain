export default methods => {
    return target => {
        Object.assign(target.prototype, methods);
    }
}

// 字符串填充函数\
// value 目标字符串
// position 需要填充的位置
// padstr 填充字符串
// return 返回目标字符串
export const padStr = (value, position, padstr, inputElement) => {
    position.forEach((item, index) => {
        if (value.length > item + index) 
    })
}