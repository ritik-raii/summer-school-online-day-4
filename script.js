var a = "hello"
let b = 24
const c = true
var d
let e = null

console.log(typeof a)
console.log(  typeof b)
console.log(typeof    c)
console.log(typeof d)
console.log(typeof e)

console.log(x)
var x = 10

let y = 5


let n = prompt("What is your name?")
let ag = prompt("Your age?")

if(ag<18){
alert("Hey "+n+", you're a teen!")
}
else if(ag>=18 && ag<=60){
  alert("Welcome "+n+", you're an adult!")
}
else{
alert("Hello "+n+", you're a senior citizen!")
}


for(let i=1;i<=10;i++){
console.log(i)
}


let ev=2
while(ev<=20){
console.log(ev)
ev=ev+2
}


let dw=10
do{
console.log(dw)
dw--
}while(dw>=1)

function add(x,y){
return x+y
}
console.log( add(4,6))

const sq=function(z){
return z*z
}
console.log(sq(3))

const gr=(nm)=>{
return "Hello "+nm
}
console.log( gr("Ritik"))

function processNumber(p,cb){
cb(p)
}

processNumber(5,function(n){
console.log("Double is",n*2)
})
