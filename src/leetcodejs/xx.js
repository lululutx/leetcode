let arr = ['101', '102','101']

item = '102'
// console.info(arr.indexOf(item))

function arrUnique(arr, key) {
    let returnArr = [];
    if (key) {
        // 对象数组去重
        const obj = {};
        returnArr = arr.reduce((cur, next) => {
            obj[next[key]] ? "" : (obj[next[key]] = true && cur.push(next));
            return cur;
        }, []);
        return returnArr;
    }
    // 普通数组去重
    returnArr = arr.reduce((cur, next) => {
        !cur.includes(next) && cur.push(next);
        return cur;
    }, []);
    return returnArr;
}
arr = arrUnique(arr)
console.info("xxxxxxxx",arr)