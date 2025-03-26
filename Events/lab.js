var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
  console.log('The file is open');
});

const EventEmitter = require('events');
const myemitter = new EventEmitter();

myemitter.on('event',()=>{
    console.log("Event Occured");
})

var function1 = ()=>{
    var a =10;
    var b = 10;
    var sum = a+b;
    console.log('sum is ' + sum);
}
myemitter.on('event',function1)

myemitter.emit('event');


