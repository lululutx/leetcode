//121. 买卖股票的最佳时机
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
//暴力解法直接干超时。。。。。
prices = [2, 1, 4];

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxValue = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxValue) {
        maxValue = prices[j] - prices[i];
      }
    }
  }
  console.info("ans", maxValue);
  return maxValue;
};
// maxProfit(prices);


//学弟的办法
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function(prices) {
  let maxPrices = 0,
    maxMake = 0;
  for (i = prices.length - 1; i > 0; i--) {
    if (prices[i] > maxPrices) {
      maxPrices = prices[i];
    }
    if (maxPrices - prices[i - 1] > maxMake) {
      maxMake = maxPrices - prices[i - 1];
    }
  }
  console.info("ans",maxMake)
  return maxMake
};
maxProfit2(prices);
