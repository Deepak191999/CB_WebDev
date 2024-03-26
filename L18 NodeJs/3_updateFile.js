// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "./data/tasks.json");

// function updateData(name, age) {
//   return new Promise((resolve, reject) => {
//     //promise humare purpose ke liye bnaya tha ,iska bina bhi chl jyage , ye isliye bnaya hai taki niche .then,.catch use kr ske
//     fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
//       if (err) return reject(err);
//       data = JSON.parse(data);
//       data = data.map((val) => {
//         if (val.name == name) {
//           return { name, age };
//         } else {
//           return val;

//         }
//       });
//       fs.writeFile(filePath, JSON.stringify(data), (err) => {
//         if (err) return reject(err);
//         resolve("Updates Successfully");
//       });
//     });
//   });
// }

// updateData("Deepa", 190)
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//-------------------------------------------------------
//Practice 1
const fs= require('fs')
const filePath= ('./data/tasks.json')

function updateData(name,age){
  return new Promise((resolve, reject)=>{
    fs.readFile(filePath,{encoding:'utf8'},(err,data)=>{
      if(err) return reject(err)
      data=JSON.parse(data)
    data=data.map((val)=>{
      if(val.name == name){
        return {name,age}
      }
    })
    fs.writeFile(filePath,JSON.stringify(data),(err)=>{
      if(err){return reject(err)}
      resolve("data updated")
    })
    })
  })
}

updateData("Deepak",'23').then((msg)=>{
  console.log(msg)
}).catch((err)=>{
  console.log(err)
})


//-------------------------------------------------------
//Practice 2  //gpt

// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "./data/tasks.json");

// function updateData(name, age) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
//       if (err) return reject(err);

//       // Parse the JSON data
//       data = JSON.parse(data);

//       // Flag to check if the name was found in the data
//       let nameFound = false;

//       // Update the data
//       data = data.map((val) => {
//         if (val.name == name) {
//           nameFound = true;
//           return { name, age };
//         }
//         return val;
//       });

//       // Check if the name was not found
//       if (!nameFound) {
//         console.log(`Name '${name}' not found in the data.`);
//       }

//       // Write the updated data back to the file
//       fs.writeFile(filePath, JSON.stringify(data), (err) => {
//         if (err) return reject(err);
//         resolve("Updates Successfully");
//       });
//     });
//   });
// }

// // Call the function with specific values
// updateData("Deepa", 100)
//   .then((msg) => {
//     console.log(msg); // Output: Updates Successfully
//   })
//   .catch((err) => {
//     console.log(err);
//   });
