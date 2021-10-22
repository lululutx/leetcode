//387. 字符串中的第一个唯一字符
//给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。


let s = "loveleetcode";
/**
 * @param {string} s
 * @return {number}
 */
//自己写的
var firstUniqChar = function (s) {
    let map = new Map()
    let array = s.split('')//将字符串分割
    array.forEach((e) => {
        if (!map.has(e)) {
            map.set(e, 1)//如果没有，放进哈希表，键是字母，值是1（出现的次数）
        } else {
            map.set(e, map.get(e) + 1)//如果有，加大值的次数
        }
    })
    let ele = [];//ele存放那些只出现一次的字符
    map.forEach((i, e) => {//对map 进行foreach 第一个参数是值，第二个是键
        if (i == 1) {
            ele.push(e)
        }
    })
    //对s进行循环，返回其下标
    if (ele.length > 0) {
        for (let i = 0; i < s.length; i++) {
            if (s[i] == ele[0]) {
                return i
            }
        }
    } else {
        return -1
    }
};
// firstUniqChar(s)


/**
 * @param {string} s
 * @return {number}
 */
//受评论区启发本质相同，但是比1稍微好点。
var firstUniqChar2 = function (s) {
    let map = new Map()
    let array = s.split('')//将字符串分割
    array.forEach((e, i) => {
        if (map.has(e)) {
            map.set(e, -1)//如果有，直接排除当-1
        } else {
            map.set(e, i)//如果没有，则存储index值
        }
    })
    for (let e of map) {
        if (e[1] != -1) {
            return e[1];
            break;
        }
    };
    return -1;
}
// firstUniqChar2(s)

/**
 * @param {string} s
 * @return {number}
 */
//官方解答，按理说和我思路一样，但是没看懂。为什么。
var firstUniqChar3 = function (s) {
    const frequency = _.countBy(s);
    for (const [i, ch] of Array.from(s).entries()) {
        if (frequency[ch] === 1) {
            console.log('ans',i)
            return i;
        }
    }
    return -1;
}
firstUniqChar3(s)



/**
 * @param {string} s
 * @return {number}
 */
//官方解答，利用队列。为什么。
var firstUniqChar4 = function(s) {
    const position = new Map();
    const q = [];
    const n = s.length;
    for (let [i, ch] of Array.from(s).entries()) {
        if (!position.has(ch)) {
            position.set(ch, i);
            q.push([s[i], i]);
        } else {
            position.set(ch, -1);
            while (q.length && position.get(q[0][0]) === -1) {
                q.shift();
            }
        }
    }
    return q.length ? q[0][1] : -1;
};


