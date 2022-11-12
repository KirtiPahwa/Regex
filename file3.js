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

/* email validation:
Conditions:
(yourname)@(domain).(extension)(.extension ---optional)
eg--
kirti@validation.co.in
kirti@validation.com


var regex=/^ $/; //means whatever we will put inside the / / , that should be the exact match . Nothing should be inserted before or after the regex

---4 parts so 4 parts ()
regex=/^ ()()()() $/;

1.(your name)- Any letters,numbers,dot and /or hyphens.
regex=/^([a-zA-Z0-9\.-])()()()$/;  //this character set([a-zA-Z0-9\.-])  just tells about the first character.But we can have muliple chars. So we'll add quantifier also.        // we can have any a-z or A-Z or 0-9 or . or -  ( we cann't write the dot . as it is in the [] char set bcz . is metaCharacter. So to add . as option in [] use \ i.e., \.)
regex=/^([a-zA-Z0-9\.-]{2,10})()()()$/;   // {2,10} -- {min,mac} is hard coded . As name can be of any length. So its better to + , which is also a quantifier. And its means o+ (means o should be atleast one).
regex=/^([a-zA-Z0-9\.-]+)()()()$/;   // + means dynamic count of numbers.

2.( @ )
regex=/^([a-zA-Z0-9\.-]+)@()()()$/;


3.(domain) - Any letter,number and/or hyphen (-). (cann't have dot)
regex=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)()()$/;   //2nd character set  //similar to yourname. Except dot.


4. (dot) 
regex=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).()()$/; 


5.(extension)- Any letter(a-z)
regex=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})()$/;   // 3rd character set-  with any character from a-z with min-2 chars and max-8 chars



6.(extension ----optional) - a dot(.) then any letter
regex=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})([.[a-z]{2,8})? $/;    //4th character set- we added . then a-z char with range{2 to 8} and this part is optional .So we add ? at the last



\d - match any digit(equal to [0-9])
\w - match any word character (a-z, A-Z,0-9 & _)
^$ - ^ means starting point and $ means ends with . So if ^abc$ -- will only accept abc just. No extra letter before  it and after abc.

// var regex3=
