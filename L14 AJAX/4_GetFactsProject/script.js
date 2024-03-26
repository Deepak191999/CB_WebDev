function getFacts(url){
    return new Promise((resolve, reject) => {
        const xhr= new XMLHttpRequest();

        //req ka type set krana hoga
xhr.open("GET",url)


//req poori hone par data a jayega , onload ye sb method hai
xhr.onload=(data)=>{
    // console.log(data)
     data= data.target.response
    data=JSON.parse(data)

    // console.log("Data recieved",data)
    for (let i = 0; i < data.length; i++) {
       console.log(data[i].text)        
    }

}

//req fail hone pe
xhr.onerror=(err)=>{
    console.log("error aya",err)
}

//req ko send krdo
xhr.send();

    })
}



function addFactsToList(data){
let factList= document.querySelector('.factList')
for (let i = 0; i < data.length; i++) {
    // console.log(data[i].text)
        // factList.innerHTML += `<li>${data[i].text}</li>`;

        let li = document.createElement('li');
        li.innerText = data[i].text;
        factList.appendChild(li);
    
}
}

let btn= document.querySelector('button')
btn.addEventListener('click',(e)=>{
    console.log("Button Click kia");
    getFacts('https://cat-fact.herokuapp.com/facts')
    .then(data=>{
        addFactsToList(data)
    })
    .catch(err=>{
        console.log(err);
    })
})