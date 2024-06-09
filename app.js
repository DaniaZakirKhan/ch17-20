// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var array=[];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var num=[
        [" 0 "," 1 "," 2 "," 3 "],
        [" 1 "," 0 "," 1 "," 2 "],
        [" 2 "," 1 "," 0 "," 1 "],
]
for (var a=0 ; a<4 ; a++){
    for(var b=0 ; b<4 ; b++){
        document.write(num[a][b]);
    }
    document.write("<br>");
}

// 3. Write a program to print numeric counting from 1 to 10.

for(var i=1 ; i<=10 ; i++){
    document.write(i , "<br>");
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var table=+prompt("Enter the number you want for table");
var length=+prompt("Enter length multiplication table");

for(var i=1 ; i<=length ; i++){
    
    document.write(table +"x" + i + "=" + table*i + "</br>") 
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var array=["apple","banana","mango","orange","strawberry"];
document.write(array[0],"<br>");
document.write(array[1],"<br>");
document.write(array[2],"<br>");
document.write(array[3],"<br>");
document.write(array[4],"<br>");


var array=["apple","banana","mango","orange","strawberry"];
for(i=0 ; i<array.length ; i++){
    document.write("Elements at index "  + i + " is " + array[i] + "<br>");
}


// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


for(var i=1 ; i<=15 ; i++){
    document.write( i +" , " );
}
   document.write("<br>")
for (var i=10 ; i>=1 ; i--){
    document.write(i + " , ");
}

document.write("<br>")

for(var i=0 ; i<=20 ; i+=2){
    if(i % 2==0){
    document.write(i + " , ");
}
}
document.write("<br>")

for(var i=1 ; i<20 ; i+=2){

if(i % 2==1){


    document.write(i + " , ");
}
}

document.write("<br>")

for(var i=2 ; i<=20 ; i+=2){
 
    document.write(i + "k"+ ", " )
    
}


document.write("<br>")

// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. 

var bakery=["cake","apple pie","cookie","chips","patties"];
var user=prompt("  Welcome! Enter whatever you want ");
matchFound = false;
 for(i=0 ; i<bakery.length ; i++){
    if(bakery[i]==user){
        matchFound=true;

    alert(user + " is available at index " + [i] + " in our bakery ");
    break;
 }
}
if(bakery[i]!=user){
    matchFound=false;
    alert( " We are sorry " + user + " is not available in our bakery")
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var num=[24 , 53 , 78 , 91 , 12];
document.write(num + "<br>")

var largest=num[0];

for(var i=0 ; i<num.length ; i++){
    if(num[i]>largest){
    largest=num[i];
}
}
document.write(" The largest value is " + largest + "<br>")

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var num=[24 , 53 , 78 , 91 , 12];
document.write(num + "<br>");
var smallest=num[0];

for(var i=0 ; i<num.length ; i++){
    if(num[i]<smallest){
        smallest=num[i]

    }
}
document.write(" The smallest value is " + smallest + "<br>")

// 10.Write a program to print multiples of 5 ranging 1 to
// 100. in javascript

for(i=5 ; i<=100 ; i++){
    if(i%5==0){
        document.write(i , ",");
    }
}