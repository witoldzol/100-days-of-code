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

//3//