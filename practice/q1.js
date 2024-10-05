//write a program to store name , phone no amd marks of a student using objecct
const item = {
    name :"kajal",
    phone_no: 233389264,
    marks: 98
}
console.log(item);


// craete variable of type string and try to add a number to it 
const name = "kajal"
const number = 23
const sum = name + number
console.log(sum);

//use typeof operator and find the datatype of the string in last question 
console.log(typeof sum);

//create a const object in js can you chnage it to hold a no. later - NO
item['surname'] = "soni"
console.log(item);

//write a js program to create a word meaning dictionery of 5 words

const meanings={
    name:"nam",
    vegetable : "sabji",
    girl :"ladki",
    appriciate :"tarif",
    excellent:"sabas"
}
console.log(meanings);

//usimg logical operator to find whether the age of a person lies between 10 and 20
a1=15

if (a1 > 10 && a1<20) {
    console.log("Age of the person lies between 10 and 20");
}else{
    console.log("no");
}

//write a program to print the mareks of a student in an object using  for lop

const obj={
    harry: 98,
    rohan : 70,
    aaksh:7
}
for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log(Object.keys(obj)[i] + " are "+ obj[Object.keys(obj)[i]]);
}


//do above in forin
for (const i in obj) {
   console.log(i);
}

//write a program and give " try again " until te user give the correct no.

// let a1 = 4
// let i
// while(i!=a1){
  //  console.log("Try again");
//i = parseInt(prompt("enter a number"),10);
//}
//console.log("enetered a right no.");


//mean of 5 no.
const mean =(a,b,c,d)=>{
return (a+b+c+d)/4
}

console.log(mean(4,5,6,7));


//print "har\"".length
const str = "har\""
console.log(str.length);

//explore the includes startswith and endswith function
const sentence = " my name is kajal"
const word = "soni "
console.log(sentence.includes(word));

const name1 ="KAJAL"
console.log(name1.toLowerCase());

const bb ="please give rs 1000"
const newname = bb.slice("please give rs".length)
console.log(newname);

const friend = "deepika"
friend[3]="r"//string is immutable
console.log(friend);

//array

const arr =[1,2,3,4,5,6,7]
const a =Number.parseInt(a)

