`use strict`

function findMaxAndMin(arr) {
    let max = min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
        if (min > arr[i]) min = arr[i];
    }
    console.log(`Max is ${max} and min is ${min}`);
    console.log(`-------------------------------------------------`);
}

const arr1 = [1,2,3];
const arr2 = [3,2,1];
const arr3 = [100,100,89,3,11,44];
const arr4 = [-67, 4343, 22,22,22,10000];
const arr5 = [5,2,62,112,-444,300,44,33000,300,32];

findMaxAndMin(arr1);
findMaxAndMin(arr2);
findMaxAndMin(arr3);
findMaxAndMin(arr4);
findMaxAndMin(arr5);