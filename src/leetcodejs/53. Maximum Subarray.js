//53. 最大子序和
//给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。


function maxSubArray(nums) {
  let pre = 0,
    maxAns = nums[0];
  nums.forEach(x => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
    console.info("查看参数",x,'    ',pre,'    ',maxAns)
  });
  console.log("maxAns", maxAns);
  return maxAns;
}
var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSubArray(nums);
