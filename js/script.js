/* alert("Hello"); */

let weather = false;

/* const downloadImg = () =>{

} */

let date = new Promise((resolve, reject) =>{


 /*    setTimeout(downloadImg, 1500); */
    if(weather){
        resolve({name: "Mcdonalds", location: "Lahore", table: 5,});
    }
    else{
        reject({reason: "Bad Weather", result: "No dates"});
    }
});


date.then((x) =>{
    console.log("In Then block");
    console.log(x);
}).catch((x) =>{
    console.log("In Catch block");
    console.log(x);
});
