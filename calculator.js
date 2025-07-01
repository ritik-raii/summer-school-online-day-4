
let a1=parseFloat(prompt("First number"))
let a2=parseFloat(prompt("Second number"))
let op=prompt("Choose + - * /")

let res

if(op==="+"){
res=a1+a2
}
else if(op==="-"){
res=a1-a2
}
else if(op==="*"){
res=a1*a2
}
else if(op==="/"){
if(a2!==0){
res=a1/a2
}else{
res="Cannot divide by zero"
}
}
else{
res="Invalid"
}

alert("Result: "+res)
