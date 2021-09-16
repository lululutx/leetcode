// (*1)一个数组中，奇数放在奇数位上，偶数放在偶数下标上O(n)       双指针法

//morris
//当前节点 cur,一开始cur来到整棵树的树头 (cur null的时候停)
    //1)cur无左树，cur = cur.right
    //2)cur有左树，找到左树最右节点mostRight
        //[1]mostRight的右指针是指向null的,mostRight.right = cur,cur = cur.left
        //[2]mostRight的右指针是指向当前节点的(cur),mostRight.right = null ,cur = cur.right
    //解
    //
