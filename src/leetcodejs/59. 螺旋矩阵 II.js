// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

/**
 * @param {number} n 
 * @return {number[][]}
 */
//模拟法
var generateMatrix = function (n) {
    const maxNum = n * n;
    let curNum = 1;
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]//方向数组，右下左上
    let directionsIndex = 0//方向数组的下标
    let row = 0, column = 0;//真正的行列
    while (curNum <= maxNum) {
        matrix[row][column] = curNum;
        curNum++
        //下一次的行和列，不一定合法的
        const nextRow = row + directions[directionsIndex][0];
        const nextColumn = column + directions[directionsIndex][1];
        //接下来判断是不是合法
        if (nextRow < 0 || nextRow >= n || nextColumn < 0 || nextColumn >= n || matrix[nextRow][nextColumn] != 0) {
            directionsIndex = (directionsIndex + 1) % 4 // 如果下次找个哪儿不合法了，顺时针旋转至下一个方向，取余
        }
        //下次真正的位置
        row = row + directions[directionsIndex][0]
        column = column + directions[directionsIndex][1]
    }
    return matrix
};


/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let startX = startY = 0;   // 起始位置
    let loop = Math.floor(n / 2);   // 旋转圈数
    let mid = Math.floor(n / 2);    // 中间位置
    let offset = 1;    // 控制每一层填充元素个数
    let count = 1;     // 更新填充数字
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

    while (loop--) {
        let row = startX, col = startY;
        // 上行从左到右（左闭右开）
        for (; col < startY + n - offset; col++) {
            res[row][col] = count++;
        }
        // 右列从上到下（左闭右开）
        for (; row < startX + n - offset; row++) {
            res[row][col] = count++;
        }
        // 下行从右到左（左闭右开）
        for (; col > startX; col--) {
            res[row][col] = count++;
        }
        // 左列做下到上（左闭右开）
        for (; row > startY; row--) {
            res[row][col] = count++;
        }

        // 更新起始位置
        startX++;
        startY++;

        // 更新offset
        offset += 2;
    }
    // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
    if (n % 2 === 1) {
        res[mid][mid] = count;
    }
    return res;
};