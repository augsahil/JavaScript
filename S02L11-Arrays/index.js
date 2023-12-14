let arr  = ["sahil", "kumar", "rahul", 87, 89.689];
console.log(arr);
let x = ["sah", "kum", "sahil"];
x.push("name");
console.log(x)
x.pop();
console.log(x)
console.log(x.concat(arr));

let arr2 = arr + x;
console.log(arr2);
console.log(typeof(arr2));
console.log(arr2[5])

let arr3 = arr.concat(x);
console.log(arr3);
console.log(typeof(arr3));
console.log(arr3[5])

console.log(arr.sort());
console.log(x.sort());
console.log(x.join('-'));
console.log(arr.join(' & '));