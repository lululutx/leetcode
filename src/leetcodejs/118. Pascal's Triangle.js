//118. 杨辉三角
// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

/**
 * @param {number} numRows
 * @return {number[][]}
 */

//自己写的，独立写的第一个
var generate = function (numRows) {
    let result = []
    for (let i = 0; i < numRows; i++) {
        let childArray = []
        for (let j = 0; j < i + 1; j++) {
            if (j == 0) {
                childArray.push(1)
            } else if (j == i) {
                childArray.push(1)
            } else {
                childArray.push(result[i - 1][j - 1] + result[i - 1][j])
            }
        }
        result.push(childArray)
    }
    console.info("ans", result)
    return result
};
// generate(6)


/**
 * @param {number} numRows
 * @return {number[][]}
 */
//官方解法，和我思路一样但是代码更优雅
var generate2 = function (numRows) {
    const ret = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
        }
        ret.push(row);
    }
    console.info("ans", ret)
    return ret;
};
// generate2(6)


/**
 * @param {number} numRows
 * @return {number[][]}
 */
//网友巧解
var generate3 = function (numRows) {
    let res = [[1]];
    for (let i = 1; i < numRows; i++) {
        let temp = [];
        let arr1 = [...res[res.length - 1]];
        let arr2 = [...res[res.length - 1]];
        arr1.push(0)
        arr2.unshift(0)
        for (let k = 0; k < arr1.length; k++) {
            temp.push(arr1[k] + arr2[k]);
        }
        res.push(temp);
    }
    console.info("ans",res)
    return res;
};
generate3(6)
