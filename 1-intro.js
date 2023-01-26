const amount = 9

if(amount < 10) {
    console.log('small numer');
}
else{
    console.log('large number');
}
console.log(`hey it's my first node app!!!!`);



//set time interval
setInterval(() => {
    console.log('hello world')
}, 1000)

// modules in node
const john = 'john'
const peter = 'peter'

const sayHi = (name) => {
    console.log(`Hellow there ${name}`)
}

sayHi('susan')
sayHi('john')
sayHi('peter')