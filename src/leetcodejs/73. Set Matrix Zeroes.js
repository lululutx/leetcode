//73. 矩阵置零
// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

// 进阶：
// 一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
// 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
// 你能想出一个仅使用常量空间的解决方案吗？


const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//我们可以用两个标记数组分别记录每一行和每一列是否有零出现。
//遍历两次
var setZeroes = function (matrix) {
    const rows = new Array(matrix.length).fill(false)
    const column = new Array(matrix[0].length).fill(false)
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                rows[i] = true;
                column[j] = true
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (rows[i] || column[j]) {
                matrix[i][j] = 0
            }
        }
    }
    console.info("ans", matrix)
};
// setZeroes(matrix)


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//第一种办法额外使用了两个数组的额外空间。我们可以将原二维数组的第一行和第一列来作为标识数组。这样合并并没有关系，因为处理后本来就改成0.
//但是这样一来，原本第一行第一列是否带0就不知道了，所以还需要两个变量，来标识远数组的第一行和第一列是否带0，最后根据这两个变量处理第一行第一列就行了。
var setZeroes2 = function (matrix) {
    const x = matrix.length, y = matrix[0].length;//列和行数
    let yHasZero = false, xHasZero = false//第一列和第一行是否有0
    for (let i = 0; i < x; i++) {
        if (matrix[i][0] == 0) yHasZero = true;
    }
    for (let j = 0; j < y; j++) {
        if (matrix[0][j] == 0) xHasZero = true;
    }
    //下面两个for循环从1开始，对第一行和第一列不做处理
    for (let i = 1; i < x; i++) {
        for (let j = 1; j < y; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for (let i = 1; i < x; i++) {
        for (let j = 1; j < y; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0
            }
        }
    }
    //反过来处理第一行第一列
    if (xHasZero) {
        for (let j = 0; j < y; j++) {
            matrix[0][j] = 0
        }
    }
    if (yHasZero) {
        for (let i = 0; i < x; i++) {
            matrix[i][0] = 0
        }
    }
};
setZeroes2(matrix)



/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//第三种还没看懂
var setZeroes3 = function (matrix) {
    const m = matrix.length, n = matrix[0].length;
    let flagCol0 = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for (let i = m - 1; i >= 0; i--) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (flagCol0) {
            matrix[i][0] = 0;
        }
    }
};
