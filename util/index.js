const util = require('util')
//inherits
function Person(){
    this.name = 'feng',
    this.sex = 'man',
    this.age = '25',
    this.sayAge = function(){
        console.log('my age is '+ this.age);
    }
};
Person.prototype.showName = function(){
    console.log('Hello my name is ' + this.name);
}
function Man (){
    this.sex =  'man'
};

util.inherits(Man,Person);

var A = new Person();
A.showName();
A.sayAge();
console.log(A)
var B = new Man()
B.showName();
// B.sayAge();
console.log(B)

//inspect
var C = util.inspect(A);
console.log(typeof(A));
console.log(typeof(C));

// isArray
let fruits = ['apple','banana','orange'];
let isArr =util.isArray(fruits)
console.log(isArr);
//isRegExp
let exp = /'0-9'/;
isExp = util.isRegExp(exp);
console.log(isExp);
//isDate
today = new Date();
let isDate = util.isDate(today);
console.log(isDate);
