// function download(url,callbck) {
//     //callback me compress ayega
//   console.log("download start");

//   setTimeout(() => {
//     let SongName= url.split('/').pop()
//     console.log("download completed",SongName);
//     callbck(SongName,upload)
//   }, 2000);
// }

// function compress(SongName, callbck) {
//   console.log("compression start");
//   setTimeout(() => {
//     let compressedSong= SongName.split('.')[0]+'.zip'
//     console.log("compression completed ",compressedSong);
//     callbck(compressedSong,allWorkDone)
//   }, 2000);

// }

// function upload(compressedSong,callbck) {
//   console.log("uploading start");
//   setTimeout(() => {
//     console.log("uploading completed ");
//     let newUrl= 'https://newSite.com/'+compressedSong

//     callbck(newUrl)
//   }, 2000);
// }

// function allWorkDone(newUrl) {
//   console.log('Final url',newUrl);
//   console.log("allWorkDone");
// }

// let url=  'http://mysite.com/albelatange.mp3';
// download(url,compress);

//-------------------------------------------------------------------------------------------------------------

let url = "http://mysite.com/albelatange.mp3";
download(url, compress);

function download(url, clbck) {
  console.log("Dowload Start");

  setTimeout(() => {
    let SongName = url.split("/").pop();
    console.log("Dowload completed", SongName);
    clbck(SongName,upload);
  }, 2000);
}

function compress(url, clbck) {
  console.log("compress Start");

  setTimeout(() => {
    let SongName = url.split(".")[0];
    SongName += ".zip";
    console.log("compress completed", SongName);
    clbck(SongName,allWorkDone);
  }, 2000);
}

function upload(url, clbck) {
  console.log("upload Start");

  setTimeout(() => {
    let web = "https//songs/" + url;
    console.log("upload completed", web);
    clbck(web);
  }, 2000);
}

function allWorkDone(url) {
  console.log("allWorkDone", url);
}
