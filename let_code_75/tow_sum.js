/*
    * @param {number[]} nums
    * @param {number} target
    * @return {number[]}
*/

var towSum = function(nums ,target){
    let map = new Map();
    for(let i = 0; i<nums.length; i++){
        const complement = target - nums[i];
        if(map.has(complement)){
            return [i ,map.get(complement)];
        }
        else{
            map.set(nums[i], i)
        }
    }
};