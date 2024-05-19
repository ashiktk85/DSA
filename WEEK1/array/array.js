function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

let nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log( maxSubArray(nums1)); 




////////////////////////////////////////////////////////////////////
function rotate(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}


function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

let nums2 = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums2, k);
console.log("Rotated array:", nums2);


/////////////////////////////////////////////////////////////////////////////////////


function moveZeroes(nums) {
    let nonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex++] = nums[i];
        }
    }

    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}


let nums3 = [0, 1, 0, 3, 12];
moveZeroes(nums3);
console.log( nums3);
