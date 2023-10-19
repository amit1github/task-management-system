// Given a non empty sorted array of integers, compute the square of each element 
// and resultant array should be sorted as well: 
// Note: You have to do this in O(n) time complexity. Extra space is not a concern. 
// Input: [-5, -4, -3, -1, 0, 2, 3, 4, 5] Output: [0, 1, 4, 9, 9, 16, 16, 25, 25] 
// Input: [-7, -4, -1, 0, 2, 3, 4, 6] Output: [0, 1, 4, 9, 16, 16, 36, 49]

function sortedSquaredArray(nums) {
    const n = nums.length;
    let left = 0;
    let right = n - 1;
    const result = new Array(n);
  
    for (let i = n - 1; i >= 0; i--) {
      if (Math.abs(nums[left]) > Math.abs(nums[right])) {
        result[i] = nums[left] ** 2;
        left++;
      } else {
        result[i] = nums[right] ** 2;
        right--;
      }
    }
  
    return result;
  }
  
  // Test cases
  const input1 = [-5, -4, -3, -1, 0, 2, 3, 4, 5];
  const output1 = sortedSquaredArray(input1);
  console.log(output1);