// count the elements of an array 
// count the frequency of each occurence
// return a dictionary with the elements as keys and frequency as values
// return a list of keys and order the keys from most frequently occuring to least frequently occuring


let testArr = [1,1,2,2,3,3]

let expected = {
    1: 2,
    2: 2,
    3: 2
}

let testArr2 = [1,2,2,3,3,3]
let expected2 = [1,2,3]

console.log(orderedElements(testArr2) === expected2)

let orderedElements = () => {
    
}

let countFreq = (inputArr) => {
    
    let modes = {};
    
    // foreach over input_arr
    inputArr.forEach((num) => {
        if (modes.hasOwnProperty(num)) {
            modes[num] += 1;
        } else {
            modes[num] = 1;
        }
    });
    // see if key is in dictionary
    // if there, increment
    // otherwise add and set to value 1
    
    
    return modes;
}

// modes[num] === undefined;

// if(modes[num])
console.log(JSON.stringify(countFreq(testArr)))
console.log(JSON.stringify(countFreq(testArr)) === JSON.stringify(expected))

/*
https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key

function sortObject(o) {
    return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
}

 * Return an Object sorted by it's Key

var sortObjectByKey = function(obj){
    var keys = [];
    var sorted_obj = {};

    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            keys.push(key);
        }
    }

    // sort keys
    keys.sort();

    // create new array based on Sorted Keys
    jQuery.each(keys, function(i, key){
        sorted_obj[key] = obj[key];
    });

    return sorted_obj;
};
*/