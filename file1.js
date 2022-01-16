console.log("This is tutorial 46");
// regular expression is used to match or find something between the section
let reg=/harry/; //This is a regular expression literal in js .Regex literal is made through /text/ as like string is through " text "
// let reg=/harry/i; // i means case insenstive
console.log(reg); //Gives /harry/
console.log(reg.source);  //Gives harry






let s="This is great code with harry and also harry";
// Functions to match expressions


// 1. exec()- This function will return an array for match or null for no match
let result=reg.exec(s); 
console.log(result);  // gives index of the first matched word starting from and return array
result=reg.exec(s);
console.log(result);  // gives index of the first matched word starting from and return array

// But if we want to have second harry / mathced word position then i just have to declare the regular expr globally using g ---
let reg1=/harry/g;  // g is a global flag and order to see the full string like first time exec() function runs then first harry found and 2nd time exec() finds the next harry word and 3rd will return null if no more harry is there
let s1="This is great code with harry and also harry";
let result1=reg1.exec(s1); 
console.log(result1);  // gives index of the first matched word starting from and return array
result1=reg1.exec(s1);
console.log(result1);  // gives index of the second matched word starting from and return array
result1=reg1.exec(s1); 
console.log(result1);  // gives index of the third matched word starting but no matche word so return null

// 2. test() = Returns true when regex is not null that regex is in string s (is word is found) or false when regex is null
result=reg.test(s);
console.log(result);

// 3. match() = Return an array of result or null . Difference is just of calling a function
// let result3= reg.match(s);  //This is wrong syntax of match function
let result3= s.match(reg);  //return array of first matched word
console.log(result3);

result3= s1.match(reg1);  // matched function return array of matched word if global word is used in regex
console.log(result3);

// 4.search()= Return index of first matched else return -1
// let result3= reg.search(s);  //This is wrong syntax of search function
let result4=s.search(reg); 
console.log(result4);

// 5. replace()=Returns new replaced string with 1 replacement and if global flag is used then all the replacements

let result5=s.replace(reg,"Kirti"); //Where the first word mathces replace that with new word
console.log(result5);  //Just replace the first matched word

result5=s.replace(reg1,"Kirti"); //Where the word mathces replace that with new word
console.log(result5);  // replace all  matched words
