const promise1= new Promise(function(resolve, reject){
    //do an async task
    //DB cals , cryptography,network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()//connection between ineide and ouside and it also sets 
    },1000)
})

promise1.then(function(){
    console.log("promise consumed");
})

// when promises were not there then we used to use q and bluebird
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async two");
        resolve()
    },1000)
}) .then(function(){
console.log("2");
})

const promise3 = new Promise(function(resolve, reject){
setTimeout(function(){
resolve({username: "kajal",email:"kajal@example.com"})
},1000)
})

promise3.then(function(user){
    console.log(user);

})

const promise4=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({user:"kajal", password :"cncnlcdkfjv "})
        }else{
            reject('error something went wrong')
        }
    },1000)
})

promise4
.then((username )=>{
    console.log(username);
    
})
.catch(function(error){
    console.log((error));
})
.finally(()  => console.log("promise is either resolve or rejected"))


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({user:"js", password :"cncnlcdkfjv "})
        }else{
            reject('error something went wrong')
        }
    },1000)
})

async function consumepromise5(){
    try{
        const response = await promise5
        console.log(response);
       }catch (error){
        console.log(error);
       }
    }

consumepromise5()

async function  getallusers(){
   try {
    const response =await fetch ('https://jsonplaceholder.typicode.com/user')
  const data = response.json()
  console.log(data);
   }
   catch(error){
    console.log("e:",error);
   }
}

getallusers()