let a =20
let b=30
console.log(a<b)
console.log(a>b)
console.log(a==b)
console.log(a===b)
console.log(a!=b)

//ternary operator

let z=10
let y =20
let c= (z>y)? "z is greater": "y is greater"
console.log(c)


//null coalsing operator
let x=null
console.log(x??"right side value")
let val=34
console.log(val??"right side value")
let u=undefined
console.log(u??"right side value")

//spread operator 
let arr=[3,5,6,1,8]
console.log(...arr)
let arr2 =[...arr]//correct
arr2[0] =100
console.log('arr2=>',arr2)
console.log('arr1=>',arr)

//rest operator
//kind off opposite of spread


// Array
function add(...num){
    let sum =0
    for(let i=0;i<num.length;i++){
        sum+=num[i]
}
return sum
}
console.log(add(3,4,5,6,7,8))

//object 

let obj={
     name:'Anshika',
    age: 21,
    address:{
        city:'ballia',
        state:'UP'
    }
}
console.log(obj['name'])
console.log(obj['age'])
console.log(obj.address.city)


//StructuredClone
//deep Copy
//shallow Copy



//Mathssss


console.log(Math)//Math is object

let pi= Math.PI
console.log(pi)
console.log(Math.round(4.3))
console.log(Math.round(4.6))
console.log(Math.sqrt(4))
console.log(Math.cbrt(27))
console.log(Math.floor(Math.random()*100)+1)
console.log(Math.random()*10)
console.log(Math.random())

//typeconversion
//two types of conversion
//explicit and implicit
//explicit mannual

let s='null'
console.log(s)
console.log(typeof s)

let n =Number (s)
console.log(n)
console.log(typeof n)

//if string such as hello ...changes into number o/p will be NaN not a number
//if empty string o/p 0


//implicit automatically type cast
let k=100
let l='20'
console.log(k+l) //10020
console.log(k-l)//80
console.log(k*l)//2000
console.log(k/l)//5









