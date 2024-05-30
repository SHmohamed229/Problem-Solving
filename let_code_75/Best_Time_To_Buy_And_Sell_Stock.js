/*
 * @param {number[]} prices
    * @return {number}
*/
// Time Complexity: O(n)
var maxProfit = function(prices){
    let currMin = prices[0];
    let currMax =0;
    for(let i=0; i<prices.length; i++){
        currMin = Math.min(prices[i],currMin);
        currMax = Math.max(prices[i]-currMin, currMax);
    }
    return currMax;
};