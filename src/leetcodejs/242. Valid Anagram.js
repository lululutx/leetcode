// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

let s = "anagram";
let t = "nagaram";
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//自己写的
var isAnagram = function (s, t) {
    let sList = s.split('')
    let tList = t.split('')
    let map = new Map()
    //这个foreach记录某字母出现的次数
    sList.forEach((e) => {
        if (!map.has(e)) {
            map.set(e, 1)
        } else {
            map.set(e, map.get(e) + 1)
        }
    })
    for (let i = 0; i < tList.length; i++) {
        if (map.has(tList[i]) || map.has(tList[i]) > 0) {
            //出现过减一
            map.set(tList[i], map.get(tList[i]) - 1)
        } else {
            //如果这个字母压根没出现，则不成功。
            return false
        }
    }
    //还要确保字母都用完的正正好好
    for (x of map) {
        if (x[1] != 0) {
            return false
        }
    }
    return true
};
// isAnagram(s, t)


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//官网方法一：排序
// t 是 s 的异位词等价于「两个字符串排序后相等」。
var isAnagram2 = function (s, t) {
    //用...展开再排列，再用join排列成字符串比较.这里不能用数组直接比较，因为数组不是基本数据类型，引用不一样，所以比对返回必false
    return s.length == t.length && [...s].sort().join() === [...t].sort().join()
};
isAnagram2(s, t)