Нижче наведено основний код обробки даних в JavaScript, що включає роботу з масивами, об'єктами та використання різних методів обробки даних.

```javascript
// Basic Data Processing in JavaScript

// Create an array of objects
let students = [
  { name: 'John', age: 15, grades: [90, 78, 88] },
  { name: 'Jane', age: 14, grades: [89, 92, 95] },
  { name: 'Bob', age: 16, grades: [80, 85, 86] },
  { name: 'Alice', age: 15, grades: [85, 89, 92] }
];

// Function to calculate average grade
function calculateAverage(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Add average grade to each student object
for(let i = 0; i < students.length; i++) {
  students[i].averageGrade = calculateAverage(students[i].grades);
}

// Function to find student with the highest average grade
function findTopStudent(students) {
  let topStudent = students[0];
  for(let i = 1; i < students.length; i++) {
    if(students[i].averageGrade > topStudent.averageGrade) {
      topStudent = students[i];
    }
  }
  return topStudent;
}

let topStudent = findTopStudent(students);

console.log('Top student: ', topStudent.name);

// Sort students by average grade
students.sort(function(a, b) {
  return b.averageGrade - a.averageGrade;
});

console.log('Students sorted by average grade: ', students);

// Filter students with average grade greater than 85
let aboveAverageStudents = students.filter(function(student) {
  return student.averageGrade > 85;
});

console.log('Students with above average grades: ', aboveAverageStudents);

// Map students to an array of their names
let studentNames = students.map(function(student) {
  return student.name;
});

console.log('Student names: ', studentNames);

// Reduce students to the total of their average grades
let totalAverageGrade = students.reduce(function(total, student) {
  return total + student.averageGrade;
}, 0);

console.log('Total average grade: ', totalAverageGrade);
```

Цей код включає різні способи обробки даних, такі як розрахунок середнього балу, пошук студента з найвищим середнім балом, сортування студентів за середнім балом, фільтрація студентів з середнім балом вище 85, отримання масиву імен студентів і зведення студентів до загального середнього балу.