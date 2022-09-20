const numbers= [1,34,56,5,76,3];
const student = {
    name:'faria',
    age:23,
    hobby:['reading','Watching movie','travel']
};
//template string
const about = `My name is ${student.name} age of ${student.age} and my hobbies are ${student.hobby[1]}`;
console.log(about)
//arrow function
const getFive = () => 55;
const addSixtyFive = num => num+ 65;
const isEven = x => x % 2 === 0;
const addThree = (x,y,z) => x + y + z; 
const doMath = (num1, num2) =>{
   const sum = num1 + num2;
    return sum;
}
//spread operator
const newNumbers = [...numbers,11,22];
console.log(newNumbers)