//ek fun ke fun ke andr fun use kr rhe hai usko callback hell khte hai ,isko avoid ke liye promises use krte hai

function download(cb){
    console.log("Download starts");
    setTimeout(() => {
        cb()
    }, 2000);
}

function compress(cb){
    console.log("Compression Start");
    setTimeout(() => {
        cb()
    }, 2000);
}

function upload(cb){
    console.log("Uploading starts");
    setTimeout(() => {
        cb()
    }, 2000);
}

download(()=>{
    console.log("Dwnloaded completed");
    compress(()=>{
        console.log("Compress completed");
        upload(()=>{
            console.log("Upload completed");
        })
    })
})

