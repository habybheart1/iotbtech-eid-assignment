function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}


console.log(myMap([5, 6, 7],(num) => num * 2));

function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(myFilter([18, 42, 23, 45, 54], (num) => num % 2 === 0));


// I dont understand the remaining part of the question, I will need more clarification on what is expected of me to do.