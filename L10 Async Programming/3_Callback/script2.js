function badalMaggiLeneGaya(cb){
    console.log("Badal Maggi Lene gaya");
    setTimeout(()=>{
        console.log("Badal Maggi Lekar Laut aaya");

        cb();
    },2000);
}

function mummyMaggibanaDo(){
    console.log("Mummy ne maggi banani start kardi");
    setTimeout(()=>{
        console.log("Mummy ne maggi bana di");
    },2000);
}

badalMaggiLeneGaya(mummyMaggibanaDo);