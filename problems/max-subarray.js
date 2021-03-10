const maxSubArray = (nums) => {
    let max = nums[0];
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        res = Math.max(nums[i], nums[i] + res);
        max = Math.max(res, max);
    }
    return max;
    
  //   for (let i = 1; i < nums.length; i++) {
  //   nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  // }
  // return Math.max(...nums)
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
