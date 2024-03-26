let id =setInterval(() => {
    console.log('Bikaner se khana a agya');
}, 1000);

let id1 =setInterval(() => {
    console.log('Haldiram se khana a agya');
}, 100);

setTimeout(() => {
    clearInterval(id)
}, 5000);

setTimeout(() => {
    clearInterval(id1)
}, 3000);

// console.log(id);
// console.log(id1);


// setTimeout(() => {
//     console.log("Hello");
// }, 2000);
// console.log("JIIIII");


