let myvar = 8;
//it means if my var is true then enter into the loop<
//check any truthy
if(myvar){
myvar = myvar * 100;
}
else{
    myvar= 0;
}

//check falsy
let myMoney = '';
// i check negetive or falsy anything
//means it now convert 60 t0 false ,and then enter the loop
//if there is a falsy value in myMoney then it will convert it into true.and so it wont enter in if block
//that is how we will understand weather is false or not.
if(!myMoney){
console.log('falsy')
}
else{
    console.log('truthy')
}
// shortcut
const money = 80;
// let food ;
// if(money>100){
//     food = 'biriyani'
// }
// else{
//     food = 'tea-cookies'
// }
//we can use ternary operator instead of writing above code:
let food1 = money > 100? 'biriyani' :  'tea cookies';
console.log(food1)
let drinks = (money>50 && myvar>500)? 'coke' : 'water';
console.log(drinks)
//shortcut for converting a number to string
const num1 = 52;
const numString = num1 + '';
console.log(numString)

//string to number shortCut  just use a + symbol
const snum = '560';
const Num = +snum;
console.log(Num)

//more use of ternary operator
let isActive = true;
const showUser = () => console.log('display');
const hideUser = () => console.log('hide');
// isActive ? showUser() : hideUser();
// use && if the left side is true then right  seide will be executed
isActive && showUser();
// use || if the left side is false then right side is executed
isActive || hideUser();

// toggle boolean
isActive = !isActive