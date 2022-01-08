//Program to find if the given two strings are anagram or not

/*function checkAnagram(a, b) {
    if (a.length !== b.length) {
        console.log(a + " and " + b + " is not a anagram")
        return;
    }
    var str1 = a.split('').sort().join(''); 
    var str2 = b.split('').sort().join('');
    var result = str1=== str2;
    console.log(a + " and " + b + " is anagram")
    return result;
}
checkAnagram("ate","eat")*/


//program to remove duplicates from an array without the inbuilt set method (logical method)
/*let a = [10,22,33,44,33,22,100,1,22,10]
for(let i =0; i<a.length;i++){
 for(let j =i+1 ; j<a.length; j++){
     if(a[i]==a[j]){
         a.splice(j,1)
     }
 }
}
console.log(a)*/

//program to find factorial number with recursion


// function gcd_two_numbers(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number')) 
//       return false;
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while(y) {
//       var t = y;
//       y = x % y;
//       x = t;
//     }
//     return x;
//   }
//  console.log(5%10);
//  console.log(66%32);
//   console.log(gcd_two_numbers(32,66));

//program to generate pascal triangle for given rows
// function generatePascal(n){
//     //2D array
//     var arr = [];
//     var tmp;
//     for(var i=0;i<n;i++){
//         //Each element in array is in turn an array
//         // The index is the row number and the array values are the row values
//         arr[i]=[];
//         for(var j=0; j<=i; j++){
//             //If index is last element the value is always 1
//             if(j==i){
//                 arr[i].push(1);
//             }else{
//                 //The following line adds up the two numbers directly above this element.
//                 tmp = (!!arr[i-1][j-1]?arr[i-1][j-1]:0)+(!!arr[i-1][j]?arr[i-1][j]:0);
//                 arr[i].push(tmp);
                
//             }
//         }
//     }
    
//     return arr;
// }

// console.log(generatePascal(10))



//program to print fibonacci sequence for given number


// function fibonacci(number){
  
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

// }
// fibonacci(13)



//program sort an element of array using bubble sort algorithm
// function bblSort(arr){
     
//   for(var i = 0; i < arr.length; i++){
      
 
//     for(var j = 0; j < ( arr.length - i -1 ); j++){
        
   
//       if(arr[j] > arr[j+1]){
  
//         var temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j+1] = temp
//       }
//     }
//   }

//   console.log(arr);
//  }
// let arr =[1,2,34,44,5,56,7,7,8]
// bblSort(arr)



//write a javascript for loop that will iterate from 0 t0 num of your choice.current odd and even number

// function findOddEven(n){
//     for(let i = 0 ; i<=n; i++){
//         if(i % 2 == 0){
//             console.log(i + " is even")
//         }
//         else{
//             console.log(i + " is odd")
//         }
//     }
// }
// findOddEven(10)


//write an javascript program to find grades for the given marks an input 

// function grade(marks){
//     if(marks>100){
//         return false
//     }
//     switch(true){
//         case (marks>=90 && marks<=100):
//             console.log("GRADE A");
//             break;
//         case (marks>=80 && marks<=89):
//             console.log("GRADE B");
//             break;
//         case (marks>=70 && marks<=79):
//             console.log("GRADE C");
//             break;
//         case (marks>=60 && marks<=69):
//             console.log("GRADE D");
//             break;
//         case (marks>=50 && marks<=59):
//             console.log("GRADE E");
//             break;
//         default:
//             console.log("fail")
//     }
//     return
// }


//write a program to inform the user is eliigible to vote for input given by user as age

// function userDetails(name="",age=""){
//     return name,age
// }
// userDetails("abel" , 20)

// function findEligibleVote(){
//     let a = userDetails("","abel");
//     let age = userDetails("",17);
//     if(age>=18){
//         console.log("Hello " + a + " you are eligible to vote");
//     }
//     else{
//         let wait = 18-age
//         console.log("Hello " + a + " your age is " + age + " so you can wait " + wait + " years and apply for vote ");
//     }
//     return a
// }
// findEligibleVote()