const removeFromArray = function(array,...nums) {
    for(numIndex=0;numIndex<nums.length;numIndex++){
        let index=array.findIndex(item=>item===nums[numIndex]);
        if(index===-1)
            continue;
        else{
          array.splice(index,1);
          numIndex--; //To recheck the same number in nums array
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
