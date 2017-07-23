//array
var List = [10,20];
var [a, b] = List;
console.log(a)  //10
console.log(b)  //20


var [a,b,...rest] = [10,20,30,40,50,60,70,80,90]
console.log(a)  //10
console.log(b)  //20
console.log(rest) //[30,40,50,60,70,80,90]

let arr = [1,2,4]
let [a, ,c]= arr
console.log(a) //1
console.log(c)	//3

// object
let obj = { name:'Nguyen Thanh Cong', ago: '24' }
let { name, ago } = obj
console.log(name) // Nguyen Thanh Cong
console.log(ago)  //24


let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10 
b; // 20 
rest; // { c: 30, d: 40 }




// default values
let arr = [1,4]
let [a=9, b=7, c=3]= arr
console.log(a) //1
console.log(b)	//4	
console.log(c)	//3

var {a = 10, b = 5} = {a: 3}
console.log(a); // 3
console.log(b); // 5

// Assigning to new variable names
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;
 
console.log(foo); // 42 
console.log(bar); // true



// Parsing an array returned from a function
function f() {
  return [1, 2];
}

var a, b; 
[a, b] = f(); 
console.log(a); // 1
console.log(b); // 2
