// AJAX ka phela tareka : XMLHTTPREQUEST
let url='https://cat-fact.herokuapp.com/facts'

const xhr= new XMLHttpRequest();

//req ka type set krana hoga
xhr.open("GET",url)


//req poori hone par data a jayega , onload ye sb method hai
xhr.onload=(data)=>{
    console.log(data)
     data= data.target.response
    data=JSON.parse(data)

    console.log("Data recieved",data)
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