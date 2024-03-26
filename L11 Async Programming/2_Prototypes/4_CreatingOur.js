function vector(){

}

vector.prototype= Object.create(Array.prototype)
console.log(vector());
console.log(vector.prototype);


let v= Object.create(vector)
console.log(v.prototype);  //vector ka prototype liya hai & vector me arr ka prototype hai to iska bhi prototype arr hua
console.log(v.join);   // v ab arr ke protype hau to isme arr ki properties hongi