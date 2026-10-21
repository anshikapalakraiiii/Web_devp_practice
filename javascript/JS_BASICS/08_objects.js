const user1={
    name:"user1",
    email:"user@gmail.com",
    address:"mathura",
    ottsubs:{
        netflix:'basic',
        amazonprime:'Premium',
    },
    show: function showDetails(){
        console.log('user :${this.name) has netflix subscription of ${this.ottsubscriptions.netflix} varient ')
    }
}
console.log(user1.show())
console.log(user1.email)
console.log(user1["email"])
