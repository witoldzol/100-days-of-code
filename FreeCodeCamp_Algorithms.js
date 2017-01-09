//ALGORYTHMS 

//-------------------------------------------------//1// Reverse string

function reverseString(str) {
  //str =[str];
  arr=[];
  arr = str.split('');
  arr.reverse();
  str = arr.join('');
  return str;
}

reverseString("hello");

//-------------------------------------------------//2// Factorialize a number (silnia!)

function factorialize(n) {

  myArr=[];
  //factor of '0' of any number is 1, so I exclude this posibility from the get go
  if( n !== 0) {
  	//I make a loop that adds increments of 1 to an array 'myArr', which I created empty
    for(i=1; i <= n; i++){
    
      myArr.push(i);
    
    }
    //I'm reducing all the elements in an arr to one number by multiplying all elements
    myArr = myArr.reduce(function(a, b){
    return  a * b;
  });
  
  
  return myArr;
    
  // if n is zero, simply return 1 and be done with it
   } return 1;
 
  
}

factorialize(0);

//---------------------------//3// Palindromes - we compare string to its reversed version, by removing all special characters and reversing thus created strings

function palindrome(str) {

  
  //replaces all the characters that are not a-z A-Z and 0 to 9, with ''(nothing)
  str2 = str.replace(/[^a-zA-Z0-9]/g, '');
  //split will split all characters into array 
  myArr = str2.split('');
  //since reverse reverses original array, we want to create sting beforehand
  myStr = myArr.join('');
  
  //we reverse the array
  myArr2 = myArr.reverse();
  //we create reversed string
  myStr2 = myArr2.join('');
  
  //we finally compare both strings that we created
  if (myStr.toLowerCase() == myStr2.toLowerCase()) {
    return true;
  }
  return false;
  
} 
  
palindrome("1 eye for of 1 eye.");

//----------------------------------//4// Find longest word, and return number (I actually don't know which word is it) (I do in ver2!!!)
	//version 2 - better//

function findLongestWord(str) {
  //create array
  myArr = str.split(' ');
  //sort by lenght parameter - it actually works!!!!!!!!!!  
  myArr.sort(function(a,b){
    return b.length-a.length;                    
  });
 //return first element's lenght 
  return myArr[0].length;

}

findLongestWord("The quick brown fox jumped over the lazy dog");	


	//version 1 - lame//
function findLongestWord(str) {
  //I split string into  array
  myArr = str.split(' ');
  //Used 'map' method to go through each element of array and convert it into nuber equal to lenght of the word
  myArr2 = myArr.map(function(val){
    return val.length;
  });
  
  //sorted by highest number
  myArr2.sort(function(a,b){
    return b-a;                    
  });
  //return first (highest number) from array
  return myArr2[0];

}

findLongestWord("The quick brown fox jumped over the lazy dog");

function confirmEnding(str, target) {
 
  var lastLetter = str.substring(str.length-1);
  
  var arr = str.split(' ');
  
  var last = arr.length -1;
  
  var lastWord=  arr[last];
  
  for(i=0; i<lastWord.length; i++){
    
    var test = lastWord.substr(i);
      if(test == target ){
        return true;
      } 
  } return false;
  
}

confirmEnding("He has to give me a new name", "name");
//-------------------------------------------------//5// Capitalize first letter of each word

function titleCase(str) {
 //convert string to lower case, and split each word into array (split automatically creates array)	
  arr = str.toLowerCase().split(' ');
  //map method goes through each element in array (so no need for a loop)
  //we assign result to new variable (arr2) otherwise results of MAP wouldnt be saved!!!!
  var arr2 = arr.map(function(word){
  	//we capitalize first letter [0] in each element, and then add reminder of word starting from second character(1)
    return word[0].toUpperCase() + word.substr(1);
  });
  
  return arr2.join(' ');
  
  }

titleCase("I'm a little tea pot");

//-------------------------------------------------//6// Return highest element from each sub array


function largestOfFour(arr) {

//first I've sorted through array, arranging items high to low
  arr2 = arr.map(function(max){
    return max.sort(function(a,b){
      return b-a;
    });
  });
// we have to declare new var as an array, otherwise we cant push anything in it!!!
 var arr3 = [];
//simple one level loop goes through all elements, pushes first element[0] of each [i] sub-array 
 for (i=0; i < arr2.length; i++){
    arr3.push(arr2[i][0]);
    }
//happy days!  
 return arr3;

//-------------------------------------------------//7// compare last word/letter of string to target word/character

function confirmEnding(str, target) {
 
 //split string into array to separate each word
  var arr = str.split(' ');
  //define length of array, 
  //-1 because arrays start counting from 0, so we have to adjust for it
  var last = arr.length -1;
  //use the defined array length to target last word in the array
  var lastWord=  arr[last];
  //we loop through the last word
  for(i=0; i<lastWord.length; i++){
  	//each loop return reminder of the 'lastWord' from next position. Eg: word, ord, rd, r.(4 loops)
    //with each loop, we assign results to var 'test' and compare with target word
    //if we get match, just return true and be happy
    var test = lastWord.substr(i);
      if(test == target ){
        return true;
      } 
  } return false;
  
}

confirmEnding("He has to give me a new name", "name");




//-------------------------------------------------//8// repeat string

function repeatStringNumTimes(str, num) {
  // declared variable
  var myStr = str;
     //if num lower than zero, return empty string
    if(num<=0){
      myStr = "";
      //otherwise loop and concotenate string
    } for(i=1; i <num; i++){
    myStr = myStr + str;
  }
  
  return myStr;
 
}

repeatStringNumTimes("abc", 3);

//-------------------------------------------------//9// truncate string at given point

function truncateString(str, num) {
  //declared variables
 var myStr;
 var sLen = str.length;
  
  if(num<=3){
    
    return str.slice(0,num) + '...';
  
    
  } else if (num >= sLen){
    str = str + '...';
    return str.slice(0,sLen);
  }
   
  return str.slice(0,num-3) + '...';
  
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);

//-------------------------------------------------//10// split array into chunks

//lets declare our variables  var arr2 = [];
  var lng = arr.length;
  //we need to iterate enough times to slice up every part of array
  //so if we take length, and divide it by size of chunks, we know how many times we have to iterate
  var ite = lng / size;
  //we declare our starting position for .slice() method OUTSIDE OF LOOP! 
  //if we include it inside, loop will simply reset values of those variables on each iteration
  var x =0;
  var y =size;
  //standard for loop
  for(i=0; i<ite; i++){
    
    arr2.push(arr.slice(x,y));
    //after we push elements into new array, we increment starting position for slice method
    x+=size;
    y+=size;
    
  }
  //hapy days
  return arr2;


//------------------ simplier solution, with .splice() method ------
//using .splice() method is very easy
//it MODIFIES the original array ( unlike .slice() ), and puts removed elements into new array


function chunkArrayInGroups(arr, size) {

  var arr2 =[];
  var lng = arr.length;
  var ite = lng / size;
  
    for(i=0; i< ite; i++){
    //because, unlike .slice(), removes items from original array, we dont have to make any adjustments!

    //originally i declared 'spl' outside of loop, and it kept giving the same output with each iteration...because, it 
    //took values from original 'arr' array declared outside the loop!	
    var spl = arr.splice(0,size);
    arr2.push(spl);
        
  }
 
  return arr2;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);

//------------------------------------------------- // 12//  check index of --- see if string 2 has all the letters present in string 1

function mutation(arr) {
 
 //we bring both strings to lower case, because .indexOf() is case sensitive   
 arr1 = arr[1].toLowerCase();
 //I also split second string into array of single characters
 arrLower = arr[0].toLowerCase().split(''); 
 
  //now we iterate each element of array filled with  single characters, and see if they return index against the other string
  // .indexOf() will return -1, if it cannot find given char/string, 
  //if it can it will give index number corresponding to location of that character in tested string
  for(i=0; i<arr1.length; i++){
    //so if we get -1, we know that character is not in tested string and we can return false
    if(arrLower.indexOf(arr1[i]) == -1){
      return false;
    }
    
  } return true;
  
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);

//------------------------------------------------- // 12 // Remove NaN, '',null, undefined, 0's from array
function bouncer(arr) {
  
  arr2 = arr.filter(function(v){
  	//i have no idea why this works
    return v;   
    //this is another version that works...but again, last bit does the job...so i include this as a reference for future
    //also 'isNaN' will return NaN and strings (they both return true)

    return typeof v == "string" && v!== "" || (typeof v == 'number' && v);
  });

  return arr2;
}

bouncer([7, "ate", "", 9, false, null, 0, NaN, undefined, ""]);

//------------------------------------------------- // 13 // Remove all itemes from first element that are specified in remaining arguments

//in this  case there can be any number of additional arguments
function destroyer(arr) {
 
 //first I create empty array for arguments
  var keys= [];
  // I use loop to push all the arguments in the array
  for (i=1; i<arguments.length; i++){
      keys.push(arguments[i]);
  }    
  //next, I define string/array to be filtered
  var filtered = arr;
  
  return filtered.filter(function(x){
    //this is the bit I couldn't figure out, first I tried to loop through filter function, but that didn't work, as each iteration kept puting
    //new result in defined variable, so i ended up with string filtered by the last key


    //this approach is amazing, (not mine!). From previous algo we know that if element is not present it will return -1 if we use .indexOf()
    //other piece is also hard for me to grasp, ie. the defined element x in function...if I understand correctly, x will be replaced by each 
    //element of array that we filter out..so 1,2,3,5... So if we return only items that cannot be found in 'keys' array (return -1), we end up
    //we have a winner! Absolutely brillian in it's simplicity. 
    return keys.indexOf(x) === -1;
    
  });   
 
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);





//------------------------------------------------- // 14 // Sort array in ascending order and insert element in proper place, 
//-----------------------------------------------------------return index of inserted element

function getIndexToIns(arr, num) {
  
//first we sort array ascending  
arr2 = arr.sort(function(a,b){
  return a-b;
});
//we define length of array for ease of use later on(not necessary really)
  var last = arr.length;

  //loop
  for(i=0; i<arr.length; i++){
    //since we want to insert element in order, we look for first element in array that is bigger than value we want to insert
    //we have equal sign because if there is equal value, we want the new value to be inserted in front of it
    if (num<=arr2[i]){
    	//now magic, we splice arr, remove nothing, and insert value. job done...almost!
     arr.splice(i,0,num);
     //we were asked to return index at which we insert the new value in the array
     return i;
     
     //in situation where new value is bigger than any other in array, 
     //we simply can .push() it to the end of string and return index = length of array

     // -1 because iteration in loop will not get to full length of array ( i<arr.length)
    } else if (i===last-1){
      arr.push(num);
     return last;
    }
  }
 
}

getIndexToIns([2, 5, 10], 15);


//-------------------------------------------- // 15 // ------decode ROT13 cipher

// ----------------- function to generate alphabet (from given argument to argument)
//NOT NEEDED FOR THIS ALOG, made just for fun and because too lazy to type out all alphabet
function makeAlph(first, last){
   var arr=[], i=first.charCodeAt(0), j=last.charCodeAt(0);
    for(; i<=j; ++i){
      arr.push(String.fromCharCode(i));
    }
    return arr;
    
  } 
var alph = makeAlph('A','Z');


// -------------------- DE - CYPHER

function rot13(str) { // LBH QVQ VG!
 
 // split the string to get an array
  str1 = str.split('');
  
 // .map method works only with arrays, thats why we split it
  var arrA = str1.map(function(x){
 //we change each letter into character code    
    return x.charCodeAt();
  });
 //now that we have all translated, we can apply easy math to transform them
  var arrB = arrA.map(function(y){
 // 65 is 'A', '78' is 'M' - we stay in this space so that we can apply adequate transformation,
 // and to ensure that we do not transform special characters (they are to remain unchanged as per requirements)
    if (65<=y && y <78){
      return y + 13;
// again this is rest of alphabe up to 'Z'
//originally I didn't includ '&&' and I couldn't figure out what was wrong!!!!!! 
    } else if(78<=y && y<91){ 
      return y -13;
    } //if character is out of scope, just return it unchanged
    return y;
  });
  
//again we use map to go through each element and transform it back to letters/characters
  var arrC = arrB.map(function(z){

  	//notice that this method is different from .charCodeAt()
  	//we cannot use this method on arrays!!! I don't fully understand why this work, but hey...I figured this  out on my own, so fudge it.
    return String.fromCharCode(z);
  });
  //finally, we transform array back into string = WIN !!!!
  return arrC.join('');
  
 
}

// Change the inputs below to test
rot13("LBH QVQ VG!");




