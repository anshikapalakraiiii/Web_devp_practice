 const user1={
    name:"user1",
    email:"user@gmail.com",
    address:"mathura",
    ottsubs:{
        netflix:'basic',
        amazonprime:'Premium',
    },
    show: function showdetails(){
        console.log(`user:${this.name} has netflix subs of ${this.ottsubs.netflix} varient `)
    }

}
console.log(user1.show())
console.log(user1.email)
console.log(user1["email"])
console.log(user1.ottsubs.netflix)


Object.keys(user1) //show properties
Object.values(user1)


const obj1 ={a:1, b:2}
const obj2 ={c:3, d:5}
const obj3 =Object.assign(obj1,obj2)

console.log(obj1)
