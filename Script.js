console.log("Question No--->3");
for (let i = 0; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log("multiples of 3 is:" + i);
    }
}
//-------------------------------------------------------------------------------------------------------------------------------------------


console.log("Question No--->4");
var sum=0,n;
n=parseInt(prompt("Enter a number:"));
while(n>=1){
    sum=sum+n;
    n=n-1;
}
alert("sum of number is:"+sum);
//------------------------------------------------------------------------------------------------------------------------------------------


console.log("Question No--->6");
var num = 32243;
var reverse = 0;
console.log("Original number is:" + num);
while (num != 0) {
    reverse = (reverse * 10) + (num % 10);
    num = parseInt(num / 10);
}
console.log("Reverse a number is:" + reverse);
//----------------------------------------------------------------------------------------------------------------------------------------

console.log("Question No--->7");
function combinationOfDog(str) {
    var string = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            string.push(str.slice(i, j))
        }
    } return string;

} console.log(combinationOfDog("dog"));
//------------------------------------------------------------------------------------------------------------------------------------------


console.log("Question No--->9");
// Find the second Highest element from the array

const array = [12, 35, 1, 10, 34, 1]
console.log("unsorted array is ", array);
console.log("sorted array is ", array.sort());
console.log("2nd highest element is ", array.sort()[array.length - 2]);
//----------------------------------------------------------------------------------------------------------------------------------

console.log("Question No--->10");
// Program to find out prime numbers in a given array.

const arr1 = [1, 3, 4, 7, 8, 9, 11, 12, 17];
const filterPrime = arr1.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } else {
            return true;
        }
    }
})
console.log(filterPrime);
//-----------------------------------------------------------------------------------------------------------------------------------------



console.log("Question No--->11");
// Write a function which takes an array and returns the sum of max, min values in that array,
// finally attach this to a prototype object.  

function addMaxMin(arr) {
    Array.prototype.max = function () {
        return Math.max.apply(Math, arr);
    };

    Array.prototype.min = function () {
        return Math.min.apply(Math, arr);
    };

    return arr.max() + arr.min();

}
console.log(addMaxMin([12, 35, 1, 10, 34, 1]));
//--------------------------------------------------------------------------------------------------------------------------------------------


console.log("Question No--->12");
// sequence the array ---------------

array = [1, 7, -6, 15, 7, 9, 0, 2, -3]

seq = [7, 15, -3]

newarray = array.join(' ');
console.log(newarray);

sequence = seq.join(' ');
console.log(sequence);

final = newarray.includes(sequence);
console.log(final);
//---------------------------------------------------------------------------------------------------------------------------------------------


console.log("Question No--->15");

//sum of two arrays---------------------
var arr1 = [1, 2, 3, 4];
var arr2 = [2, 3, 4, 5];
var arr3 = [];
for (let i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i] + arr2[i];
}

console.log(arr3);
//-------------------------------------------------------------------------------------------------------------------------------------

console.log("Question No--->16");
const arr1 = [3, 4, 5];
const arr2 = [4, 5, 6,7];
const addtwoarr = arr1.map((element, index) => {
    
    return element + arr2[index];

})
console.log(addtwoarr);
//-----------------------------------------------------------------------------------------------------------------------------------------


console.log("Question No--->8");
function uniquechar(s){
   const charCount = {};
   for(let i=0;i<s.length;i++){
       const char= s[i];
       charCount[char]= charCount[char]+1 || 1;
   }
   for(let i=0;i<s.length;i++){
    const char= s[i];
  if(charCount[char]===1){
      return i;
  }
}
return-1;
}
console.log(uniquechar("thequickbrownfoxjumpsoverthelazydog"))
//---------------------------------------------------------------------------------------------------------------------------------------------------------------


console.log("Question No--->1");
const doThis = () => document.querySelectorAll('p')[0].innerHTML ='Do this';
const doThat = () => document.querySelectorAll('p')[1].innerHTML ='Do that';
const doAlsoThat = () => document.querySelectorAll('p')[2].innerHTML ='Do also that';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// using async function
(async () => {
  doThis(); // executed at t=0s (approx)
  await sleep(1000);
  doThat(); // executed at t=1s (approx)
})();

// using promises
sleep(2000).then(doAlsoThat); // executed at t=2s (approx)


