 const descriptor = Object.getOwnPropertyDescriptor(Math,)
 //objects are iterable
console.log(descriptor);
// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const chai ={
    name: "ginger ",
    price:250,
    isavailable: "True",

    orderchai:function(){
        console.log("no chai");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !='function'){

    }
    console.log(`${key}:${value}`);//non iterable

}