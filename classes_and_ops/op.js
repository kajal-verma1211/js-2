const user={
    username: "kajal",//these are properties
    logincount: 8,
    signedin: true,

    getUserdetails: function(){
        console.log("got user details");
    }
}

console.log(user.username);
console.log(user.getUserdetails());

const promise1=new Promise()//new keyword is a constructor function 