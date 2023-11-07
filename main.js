console.log("Hello Ecma Script");
console.log(null==undefined)
console.log(null===undefined)
console.log(true,false)

console.log("Hello");
// console.log(myVar);
var myVar = 10;
let myLet= 2;
console.log(myVar);
console.log(myLet);
{
    // console.log(myLet);
    var myVar2 = "abc";
    let myLet = "IJSE";
    console.log(myLet);
}
console.log(myVar2);
console.log(myLet);

/*Binary numbers*/
console.log(0b1010,typeof 0b10101)
console.log(0b1010n,typeof 0b10101n)

/*Ocatal numbers*/
console.log(0o10,typeof 0o10) 
console.log(0o10n,typeof 0o10n) 

/* HexaDecimal numbers*/
console.log(0xFF,typeof 0xFF)
console.log(0xFFn,typeof 0xFFn)

/*Decimal numbers */
console.log(10)
console.log(1250.25)
console.log(1.256e2, 1.245E4)

*seperator*/
console.log(0b10_10,typeof 0b101_01)
console.log(0b1010,typeof 0b10101)
console.log(0b1010,typeof 0b10101);
console.log(0.3-0.2)  //IEEE-754 follows
console.log(Infinity);
console.log(5/0);
console.log(-5/0);
console.log(NaN);
console.log(false/0);
console.log('ABC',typeof 'ABC');
console.log("ABC", typeof "ABC");
console.log("This is 'fucking'");
console.log(`ABC`,typeof `ABC`);
console.log(`Hello
                ${(2+3)}
                        World`);
console.log(Number.MAX_SAFE_INTEGER)
console.log(undefined,null);
console.log(Symbol("*")==Symbol("*"));

console.log("----------------------------")

var myVar = 10;
console.log(myVar);
myVar= true;
console.log(myVar);

myVar = "I am bulma"
console.log(myVar)

for(var i=0; i< 5; i++){
    console.log(i)
}
console.log(i);