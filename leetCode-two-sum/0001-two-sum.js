/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     const index = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (diff in index) {
            return [index[diff], i];
        }
        index[nums[i]] = i;

    }

    return [];   
};