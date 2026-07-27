let student = [
    {name: "Ambika", roll: 50, marks: 90},
    {name: "Saurabh", roll: 57, marks: 80},
    {name: "Ravi", roll: 54, marks: 70},
    {name: "Aryan", roll: 52, marks: 60},
];
// console.log(student)
// const arr2 = student.forEach((students)=>{
//     // forEach not return value thatsWhy i use console.log
//     console.log(students);
//     console.log(students.name);
//     console.log(students.roll);
// })


// // map using in object

// //map return values in a array form
// const arr2 = student.map((students)=>{
//     return students.name
// })
// console.log(arr2);

// // use filter
// const arr2 = student.filter((students)=>{
//     return students.marks>=80;
// });
// console.log(arr2);
//console.log(Object.keys(student)); // it give index because it store object in array 
// student.forEach((st)=>{
//     console.log(Object.keys(st));
// });

// student.forEach((st)=>{
//     console.log(Object.values(st));
// });

// student.forEach((st)=>{
//     console.log(Object.entries(st));
// });

// 2nd method to find key values
// student.forEach((st)=>{
//     Object.entries(st).forEach(([key,value])=>{
//         console.log(key, value);
//     });
// });

// find average of marks
const avg = student.reduce((acc, student)=>{
    return acc+student.marks;
},0)/student.length;
console.log(avg);
