const eventemitter = require('events');

//class Myemitter extends eventemitter{};
//const myemit =new Myemitter();
const myemit = new eventemitter();

myemit.on('waterfall', ()=>{
    console.log("please turn off the motor ");
    setTimeout(()=>{
        console.log("water is overflow");
    } , 3300);
});
console.log("the script is running 1111");

myemit.emit('waterfall');
console.log("the script is running 2222");
console.log("the script is running 3333");

