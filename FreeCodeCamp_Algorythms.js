//ALGORYTHMS 

//1// Reverse string

function reverseString(str) {
  //str =[str];
  arr=[];
  arr = str.split('');
  arr.reverse();
  str = arr.join('');
  return str;
}

reverseString("hello");

//2// Factorialize a number (silnia!)

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

//3// Palindromes - we compare string to its reversed version, by removing all special characters and reversing thus created strings

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

//4// Find longest word, and return number (I actually don't know which word is it) (I do in ver2!!!)
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

