// 给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。
// 如果不存在符合条件的子数组，返回 0 。



let target = 7
let nums = [2, 3, 1, 2, 4, 3]
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
//暴力解法
var minSubArrayLen = function (target, nums) {
    let sum = 0;
    let minLength = 0;
    let thisMin = 0
    //第一个for设置i为子数组的起点
    for (let i = 0; i < nums.length; i++) {
        sum = 0
        //第二个for设置j为子数组的终点
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]

            if (sum >= target) {
                thisMin = j - i + 1
                if (minLength == 0) {
                    minLength = thisMin
                }
                minLength = Math.min(thisMin, minLength)
            }
        }
    }
    return minLength
};
minSubArrayLen(target, nums)


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
//滑窗  贪吃蛇
var minSubArrayLen2 = function (target, nums) {
    let left = 0, right = 0;
    let sum = 0;
    let thisMin = 0;
    let minLength = 0;
    while (right < nums.length) {
        sum += nums[right]
        while (sum >= target) {
            thisMin = right - left + 1;
            if (minLength == 0) {
                minLength = thisMin
            }
            minLength = Math.min(minLength, thisMin)
            sum -= nums[left];
            left++
        }
        right++
    }
    return minLength
};