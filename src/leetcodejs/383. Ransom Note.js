//383. 赎金信
// 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，
// 判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。
// 如果可以构成，返回 true ；否则返回 false。
// (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。
// 杂志字符串中的每个字符只能在赎金信字符串中使用一次。)


let magazine = 'aab';
let ransomNote ='baa';
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
//自己写的
var canConstruct = function (ransomNote, magazine) {
    let map = new Map();
    let magazineList = magazine.split('');
    let ransomNoteList = ransomNote.split('')
    //没有的第一次算1，有的+1
    magazineList.forEach((e) => {
        if (!map.has(e)) {
            map.set(e, 1)
        } else {
            map.set(e, map.get(e) + 1)
        }
    })
    //有的就减一，当不满足时（1，所求字母压根没出现。2，被减完了，凑不够了）
    for (let i = 0; i < ransomNoteList.length; i++) {
        if (map.get(ransomNoteList[i]) && map.get(ransomNoteList[i]) > 0) {
            map.set(ransomNoteList[i], map.get(ransomNoteList[i]) - 1)
        } else {
            return false
        }
    }
    return true
};
canConstruct(ransomNote, magazine)