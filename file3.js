console.log("This is tutorial 48");
// Character Sets

let regex = /h[a-z]rry/;  //can be any character from a to z...... [a-z] is a character set means anyone character can come from a-z
regex = /h[ryu]rry/;  // can be r,y,u... [ryu] is a character set means to check if there any character from between ryu
regex=/h[^ryu]rry/; //should not be r,y,u .... [^ryu] means not ryu
regex=/h[^aty]rr[yu]/;  //multiple character sets can be there
regex=/h[a-zA-Z]rr[yu0-9]/;  //can be a-z or A-Z and y or u or 0-9
// we can have as many character sets as we want

// Quantifiers :-->used to specify quantity of any string
regex=/har{2}y/;  //r can occur exactly 2 times
regex=/har{0,2}y/;  //r can occur exactly {0 or 1 or 2 }times 


// Groupings --- we use paranthesis for groupings()
regex=/(har){2}/;  // by grpuping we can tell that (har) should come exactly 2 times 
regex=/(har){2}([0-9]r){3}/;  //harhar1r2r5r will pass out from this regex because 0-9 digit with r have to come exactly 3 times



const str="harhar1r3r4r ";

let result=regex.exec(str);
console.log(result);
if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}