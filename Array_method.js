//array of objects
const products = [
    {name:'laptop',price:34000,brand:'lenevo',color:'silver'},
    {name:'phone',price:7000,brand:'iphone',color:'golden'},
    {name:'watch',price:3000,brand:'titan',color:'yellow'},
    {name:'Sunglass',price:300,brand:'ribon',color:'Black'},
    {name:'Camera',price:3200,brand:'Canon',color:'gray'}
];

const brands = products.map(product =>product.brand)
// console.log(brands);
// const prices = products.map(price => price.price)
// console.log(prices)

//if we want to loop through an array and dont need a return we can use for Each
// for each doesnt return anything. 
// products.forEach(product => console.log(product.price));
// products.forEach(product => console.log(product.color));
// products.forEach(product => {
//     console.log(product.brand)
// });

//filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap)

const containingN = products.filter(product => product.name.includes('n'));
// console.log(containingN)

//find
const special = products.find(p => p.name.includes('n'));
console.log(special)