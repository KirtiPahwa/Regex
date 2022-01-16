// Metacharacter Symbols


console.log("Tutorial 47");

let regex=/harry/;
let str="harry";

// lets look into some metacharacter symbols
regex=/^h/;   //^ means expression will match if string starts with
regex=/ry$/;  // $ means expression will match if string ends with at the end of the string
regex=/h.rry/;  // . means matches exactly anyone character
regex=/h*y/;  // * matches any 0 or more character
regex=/ha?rryi?/; // ? means optional doesnot matter if that char exist or not.. eg. a? means a is optional 
regex=/h*rry/; // matches the harry,haarrrrreorsprry,...But if we want to exactly match h*rry but it assumes it as special metacharater and allow 0 or more character 
// so for that we can use escape character ie--> \
regex= /h\*rry/;  // \ means telling to javascript engine that exactly match string like h*rry not assume it metacharacter

let result=regex.exec(str);
console.log(result);
if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}