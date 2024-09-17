// Variable declaration => var,let,const to store a data in container
// data type => it diclare what type of data has to be store => number,float

//var fullname="niresh"
// let fullname="zamam"
// const fullname="zammam"
//alert(fullname)

//Temporal Dead Zone
// alert(secondname)
// alert(age)

// var secondname="Suresh"
// let age=23

//Symbols
// var thirdname="Nithesh"
// let age=23
// let bigints=BigInt(123)
// const floats=12.4
// let Symbols='/,'
// console.log(thirdname,age,bigints,floats,Symbols)

//Typeof operator show the type of the data in a variable
// console.log(typeof("Niresh"));
// console.log(typeof(10));
// console.log(typeof(10n));
// console.log(typeof(Symbol()));
// console.log(typeof(1.5));
// console.log(typeof(true));

//OPerators =>Arithmetic Operator,logical,conditional,Bitwise Operator,Assignment operator
//Arithmetic Operator
// let numberone=10;
// let numbertwo=5;
// console.log(numberone+numbertwo)
// console.log(numberone-numbertwo)
// console.log(numberone*numbertwo)
// console.log(numberone/numbertwo)
// console.log(numberone%numbertwo)

//Logical operator (AND OR NOT)
//prompt is used to asign the input by user
//&&-AND ||-OR !-NOT &&-logical(True/False) &-bitwise(0 / 1)
// let emaildata=prompt("Enter the email");
// let password=prompt("Enter the password");
// console.log(emaildata =="Niresh" && password=="6617");
// console.log(emaildata =="Niresh" || password=="6617");
// console.log(!emaildata =="Niresh" && password=="6617");

//Comparison Operator ==,===,>=,<=,>,<,!=
// console.log(5==5);
//=== this will compare the data type of both conditions
// console.log(5==='5');
// console.log(5<=5);
// console.log(5>=5);
// console.log(5<5);
// console.log(5>5);
// console.log(5!=6);




//Asignment Operator Asigning the value to the variable
// let name="Niresh";
// console.log(name);

//conditional Operator- if,if else,if else-if,switch,while,do-while,for,for of,for in
// let myage=prompt("Enter your age");
// if (myage>=18) {
//     alert("Your are eligible");
// }

//if-else
// if (myage>=18) {
//     alert("You are eligible");
// }
// else{
//     alert("You are not eligible ")
// }

//if else-if
// if (myage>=18 && myage<100) {
//     alert("You are eligible");
// }
// else if (myage>=100) {
//     alert("You don't need to come and vote we will appear to your Home");
// }
// else if(myage<=18-1)
// {
//     alert("You are not eligibleto vote")
// }
// else{
//     setTimeout(() => {
//         console.log("Your input is wrong")
//     },5000);
    
// }
    
//Question
// let mysal=prompt("enter your salary");
// if(mysal>=20000 && mysal<=30000){
//     alert("You are eligible for loan upto 2 lakh")
// }
// else if(mysal>=30000 && mysal<=40000){
//     alert("You are eligible for loan upto 3 lakh")
// }
// else if(mysal>=40000 && mysal<=60000){
//     alert("You are eligible for loan upto 4 lakh")
// }
// else if(mysal>=100000){
//     alert("You are eligible for loan upto 10 to 12 lakh")

// }
// else{
//     alert("You are not eligle for loan")

// }

//Switch
// let mysal=prompt("enter your salary");
// switch (true) {
//     case(mysal>=20000 && mysal<=30000) :
//     alert("You are eligible for loan upto 2 lakh")    
//     break;
//     case(mysal>=30000 && mysal<=40000) :
//     alert("You are eligible for loan upto 3 lakh")    
//     break;
//     case(mysal>=40000 && mysal<=60000) :
//     alert("You are eligible for loan upto 4 lakh")    
//     break;
//     case(mysal>=100000) :
//     alert("You are eligible for loan upto 10 to 12 lakh")    
//     break;

//     default:
//     alert("You are not eligle for loan")
//     break;
// }

//While and do while loop
// let myname=prompt("enter your name");
// let number=0;//initialization
// while (number<myname.length) {
//     console.log(myname[number]);
//     number++;
// }
// let secondname=prompt("enter your second name");
// snumber=0;
// do{
//     console.log(secondname[snumber]);
//     snumber++;  
// }while(snumber<secondname.length)

//for loop (for ,for of for in)
// let firstnumber=Number(prompt("enter first number"));
// let secondnumber=Number(prompt("enter second number"));
// for (let i = firstnumber; i <secondnumber ; i++) {
//     console.log(i);
// }

//To separate the name one by one
// let fname=String(prompt("Enter your Name"))
// for (let index = 0; index < fname.length; index++) {
//     console.log(fname[index]);
// }

//another method which is simple for of simply by calling variable name
// let myname=String(prompt("enter your name"))
// for (const element of myname) {
//     console.log(element); 
// }

// for in loop
// const Nireshdata={Name:"Niresh",age:21,role:"Web Developer",place:"Chennai"}
// for (const key in Nireshdata) {
//     console.log(Nireshdata[key]);       
// }

//example for forloop
// let sname=String(prompt("Enter your name"));
// let ans="";
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// Map It is same as for loop mainly used for seperating the values
// const data=[
//     {Name:"Niresh",age:21,role:"Web Developer",place:"Chennai"},
//     {Name:"Nithesh",age:22,role:"Web Developer",place:"Bangalore"},
//     {Name:"Yogesh",age:23,role:"Web Developer",place:"Mumbai"},
//     {Name:"Suresh",age:24,role:"Web Developer",place:"Pune"}
// ] 
// data.map((ddd   )=>{
//     console.log(ddd.Name);
//     console.log(ddd.age);
//     console.log(ddd.place);   
// })

// Function
// without using return 
// function displayname(params) {
//     let fname="niresh"
//     console.log(fname);
    
// }
// displayname()

//with return property
// function displayname1(params) {
//     let fname="Nithesh"
//     return fname;
// }
// let fun=displayname1;
// console.log(fun);

//String Methods 
//To find the string length using length method
// let firstname="  niresh  "
// console.log(firstname.length);
//It shows the character at which index 
// console.log(firstname.charAt(3));
// console.log(firstname.indexOf("h"));
// console.log(firstname.replace("niresh","nithesh"));
//match will show the details particular string store in the variable
// console.log(firstname.match("niresh"));
//trim will delete unwanted spacing at the value
// console.log(firstname.trim());
// console.log(firstname.concat(" nithesh").concat(" ").concat(" Suresh"));
//trim will delete unwanted spacing at start
// console.log(firstname.trimStart());
//trim will delete unwanted spacing at end.
// console.log(firstname.trimEnd());
//includes will check the value is present or not it shows boolean vlaue(true or false)
// console.log(firstname.includes("esh"));
//To Slice a particular String variable_name.slice(start_index,Ending_index+1)
// console.log(firstname.slice(3,7+1));



//Array Methods
// let names=["wajid","webd","niresh","zammam",3,4,5,6,7,1,true,false];
// let names1=["niresh","zammam"];
// console.log(names);
// console.log(names.join("-"));
// console.log(names.concat(names1));
// console.log(names.sort());
// console.log(names.reverse());
//push will add value at last of an array
// names.push("Nithesh")
// console.log(names);
//unshift will add value at start of an array
// names.unshift("Suresh")
// console.log(names);
//pop will remove the value at last of an array
// names.pop()
// console.log(names);
//shift will remove the value at start of an array
// names.shift()
// console.log(names);
//splice will add value in between .splice(starting indexno.,no.of values,"replace values")
// names.splice(3,2,"fools")
// console.log(names);

//To find Duplicate String
// function duplicatestring(params) {
//     if(params){
//         let Object={};
//         for (let index = 0; index < params.length; index++) {
//             if(Object[params[index]]){
//                 Object[params[index]] +=Object[params[index]];
//             } else{
//                 Object[params[index]]=1;
//             }
            
//         }
//         console.log(Object);
//     }
// }
// duplicatestring("zamam")

//Set Time out it display the code once at specific time interval
// setTimeout(() => {
//     console.log("nriesh");
// }, 5000);

//SetInerval it will display the code repeatedly for a specific time interval
// setInterval(() => {
//     let datetime=new Date();
//     console.log(datetime);
// }, 1000);

// Math -> javascript inbuilt methods
//floor - It will always roundoff 
// console.log(Math.floor(5.25));
//round -it will also roundoff the value when the decimal is more than 4
// console.log(Math.round(5.56));
//ceil
// console.log(Math.ceil(5.25));
//random like otp
// console.log(Math.floor(Math.random()*10000));

//DOM -> Document Object Modules it will consider as object(key:value)
//document -> HTMl File
//.getElements ->method
// console.log(document.getElementsByTagName("h1")[0]);

//other ways to get the HTML tag get elementbyid
// console.log(document.getElementsByClassName("one")[0]);
// console.log(document.getElementsByClassName("one")[1]);
// console.log(document.getElementsByClassName("one")[2]);
// console.log(document.getElementsByClassName("one")[3]);

//getElementsById -> it will only call the first element better use this one
// console.log(document.getElementById("one"));

// console.log(document.querySelectorAll("#one")[3]);

//hint: better use getElementById and querySelector
//console.log(document.querySelector("#one"));














