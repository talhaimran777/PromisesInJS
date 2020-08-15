let btn = document.querySelector("button").addEventListener('click' , () =>{
    alert("Yeah!");
});


const getData = true;
let fetchingDataFromAServer = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(getData){
            resolve("Fetched Data");
        }
        else{
            reject("Could Not Fetch the data");
        }
        
    }, 5000);
});


let recordVideo1 = new Promise((resolve, reject) =>{
    resolve("Recorded video 1");
});

let recordVideo2 = new Promise((resolve, reject) =>{
    resolve("Recorded video 2");
});



// This method runs them one by one and also one can wait for the other one to finish
Promise.all([
    fetchingDataFromAServer, 
    recordVideo1,
    recordVideo2
]).then((result) =>{
    console.log(result);
}).catch((error) =>{
    console.log(error);
});



/* fetchingDataFromAServer.then((x) =>{
    console.log(x);
    return recordVideo1;
}).catch((x) =>{
    console.log(x);
    return recordVideo1;
}).then((x) => {
    console.log(x);
    return recordVideo2;
}).then((x) => {
    console.log(x);
}); */













/* let signUp = false;

let logIn = true;


const signUpResult = new Promise((resolve, reject) =>{
    if(signUp){
        resolve("SignUp Successfull!");
    }
    else{
        reject("Could not sign up!");
    }
});

signUpResult.then((x) =>{
    console.log(x);
}).catch((x) =>{
    console.log(x);
}); */