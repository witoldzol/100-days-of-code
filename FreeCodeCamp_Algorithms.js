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
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------










