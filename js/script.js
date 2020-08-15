/* More about promises */

/* Ed Thing of Call back */


/* function logIn(email, pass, callback){
    setTimeout(() => {
        callback({userEmail: "Talha Imran"});   
    }, 3000);
}


function getVideos(user, callback){
    setTimeout(() => {
        callback(['Video 1','Video 2','Video 3']);
    }, 1000);
}

function getDetails(video, callback){
    setTimeout(() => {
        callback({name: "Learn JavaScript", lenght: 21});
    }, 1000);
}

/* This is a callback hell 

logIn("talhaimran284@gmail.com", '1,2,3,4', (user) => {
    getVideos(user,  (userVideos) =>{
        getDetails(userVideos[1], (details) =>{
            console.log(details);
        });
    });
}); */

/* This is a callback hell */


/* Now i'm refactoring this code using promises */

let logIn = (email, pass) =>{
 /*    setTimeout(() => {
        callback({userEmail: "Talha Imran"});   
    }, 3000); */

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve({userEmail: email, userPass: pass});
        }, 5000);  
    });
}


let getVideos = (user) => {

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(['Video 1','Video 2','Video 3']);
        }, 2000);
    });
    
}

let getDetails = (video) =>{


    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve({name: "Learn JavaScript", lenght: 21});
        }, 1000);
    });
   
}



let user = logIn("talhaimran284@gmail.com", 'talha157');


user.then((user) =>{
    console.log(user);
    return getVideos(user);
}).then((videos) =>{
    console.log(videos);
    return getDetails(videos[0]);
}).then((details) => {
    console.log(details);
});
//console.log(user);

































/* let getData = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve({user: "Talha Imran"});
    }, 5000);
});



let getvideos = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(['video1','video2','video3','video4']);
    }, 1500);
});

getData.then((data) =>{ 
    console.log(data);
    return getvideos;
}).then((videos) =>{
    console.log(videos);
}); */

/* getvideos.then((videos) =>{
    console.log(videos);
}); */


/* Promise.all([
    getData,
    getvideos
]); */






/* let logIn = true;
console.log("Start");

let tryLogIn = new Promise((resolve, reject) => {
    if(logIn){
        resolve("Successfully logged In");
    }
    else{
        reject("Log In failed");
    }
});


let postPhoto = new Promise((resolve, reject) => {
    if(logIn){
        resolve("Successfully Posted a photo");
    }
    else{
        reject("Cannot post have to login first to post");
    }
}); */


/* Promise.all([
    tryLogIn, 
    postPhoto
]).then((message) => {
    console.log(message);
}); */


























/* Promise Chainging Learning Properly */

/* let logIn = true;
let doLogIn = new Promise((resolve, reject) => {
    if(logIn){
        resolve("Logged In!");
    }
    else{
        reject("Log In Failed");
    }
});

let postPhoto = new Promise((resolve, reject) => {
    resolve("Posted a poto");
});


doLogIn.then((logInResult) =>{
    console.log(logInResult);
    return postPhoto;
}) */






/* Using Callbacks */


/* let logIn = (email, pass, callback) => {
    setTimeout(() =>{
        callback({userEmail: email, userPass: pass});
    }, 2000);
}

console.log("Start");
let returned = logIn("talhaimran284@gmail.com", 'talha157', (user) =>{
    console.log(user);
});

console.log("End"); */


/* let btn = document.querySelector("button").addEventListener('click' , () =>{
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
}); */



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