//JSON
const student = {
    name:'sabit',
    age:23,
    movies:['flue','friend']
    }
    const StudenJSON = JSON.stringify(student);
    console.log(StudenJSON);
    const studentObj = JSON.parse(StudenJSON);
    console.log(studentObj)

    //fetch
    // fetch('url')
    // .then(res => res.json())
    // .then(data => console.log(data))

    //keys, values of object
    const keys = Object.keys(student)
    const values = Object.values(student);

    //to loop through an array we'll use forEach--if we dont need anything in return
    const numbers = [24,45,32,45,23,23,456,4,423,45,4,33]
numbers.forEach(number => console.log(numbers))
//if we need a return we will use  map
numbers.map(num => num * 2);

// there somethings which are array like objects. not totally Array.to loop through these:
// for of should use 
//add or remove from an array.
//array of objects
const products = [
    {name:'laptop',price:34000,brand:'lenevo',color:'silver'},
    {name:'phone',price:7000,brand:'iphone',color:'golden'},
    {name:'watch',price:3000,brand:'titan',color:'yellow'},
    {name:'Sunglass',price:300,brand:'ribon',color:'Black'},
    {name:'Camera',price:3200,brand:'Canon',color:'gray'}
];

const newProduct = {name:'webCam',price:700,brand:'lal;'};

//copy products array and then add new product
const newProducts = [...products,newProduct];
// console.log(newProducts);

// create a new array without one specific item
//remove phone means create a new array without phone

const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining)
