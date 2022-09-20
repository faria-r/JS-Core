
//array distructuring
const numbers = [42,65];

const [one, two] = [42,65]; 
//or
const [first, second] = numbers; 
//here we set two variable and take their value form an array which give us value 
//according to declared serial as its index .first will get index  0 and second will get 
// index 1
console.log(one,two)
function boxify(num1,num2){
    const nums = [num1,num2];
    return nums;
}
//we also can destructureon  a function which return us a array .so it will giva us same array in return
const [firsts, seconds] = boxify(45,43)
console.log(boxify(3,5));

const student = {
    name:'sabit',
    age:23,
    movies:['flue','friend']
    }
    const [frirstMovie,secondMovie] = ['flue','friend'];
    // or we can write also 
    const [movieOne,movieTwo] = student.movies;

    // object destructuring 
    //in case of object property name and left side value name must should be same
    const {name,age}= {name:'alu',age:14};

    const Employee   = {
        name:'abir',
        ide:'VsCode',
        machine:'Mac',
        languages:['html','css','js'],
        specification:{
height: 66,
weight:68,
address:'cumilla',
drink:'water',
watch:{
    color:'black',
    price:500,
    brand:'titan'
}
        }
    }
    // accessing its property by distructuring: 
    const {ide,machine} = Employee;
    const {weight,address} = Employee.specification
    const {brand,color} = Employee?.specification?.watch;