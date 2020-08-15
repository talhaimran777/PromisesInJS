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



/* 
    This is one way of doing it 
let user = logIn("talhaimran284@gmail.com", 'talha157');
user.then((user) =>{
    console.log(user);
    return getVideos(user);
}).then((videos) =>{
    console.log(videos);
    return getDetails(videos[0]);
}).then((details) => {
    console.log(details);
}); */





/* Another way using async and await Same stuff */


async function displayUser(){
    const user  = await logIn("talhaimran284@gmail.com");
    console.log(user);
    const videos = await getVideos(user);
    console.log(videos);
    const details = await getDetails(videos[0]);
    console.log(details);
}


displayUser();

/* Another way using async and await Same stuff */