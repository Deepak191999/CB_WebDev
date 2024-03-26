// == lose equality (compare values)
// == strict equality (compare values and data type)

console.log(5=='5')
console.log(5==='5')



console.log('\\t==0:','\t'==0)   // isme \t integer me convert hua jo ki 0 hai
console.log('\\n==0:','\n'==0)
console.log('\\t==\\n: ','\t' =='\n' )     // done string hai uska type conversion nhi hua isliye 'false ayega
console.log('\\t==\\+n: ','\t' ==+'\n' )

console.log('[]== 0',[]== 0);
console.log('\\t==[]','\t'== +[]); //+ lga ke 0 me add kra        
console.log('\\t==0','\t'== 0);    // true

console.log("''==[]:", '' == []); //true
console.log("0==[]:", 0 == []); //true
console.log("0 =='':", 0 == ''); //true

console.log("5/0",5/0)
console.log("-5/0",-5/0)
console.log("5/Infinity",5/Infinity)
console.log("5/hello",5/'hello')