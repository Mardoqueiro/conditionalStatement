// let numb1 = 14 
// let numb2 = 14
// if (numb1 == numb2) {
//     console.log(`${numb1} is equal than ${numb2}`)
// } else {
//     console.log(`${numb1} is not equal than ${numb2}`);
// }

// let salary = 5000
// let bonus = 700
// if (salary > 7000) {
//     console.log('your salary is R${salary + bonus}');
// }

// else {
//     console.log('your salary is R${salary}');
// }

// salary > 7000 
//     ? console.log('your salary is R${salary + bonus}')
//     : console.log('your salary is R${salary}');


 
  // If statement
//   let performance = true
//   let salary = 7000
//   let bonus = 500
//   if (salary > 5000) {
//       console.log(`Your salary is R${salary + bonus}`);
//   } else {
//       console.log(`Your salary is R${salary}`);
//   }
// if and else if statement
//   if (performance) {
//       console.log(`Your salary is R${salary + bonus}`);
//   } else if (salary > 5000) {
//       console.log(`Your salary is R${salary + bonus}`);
//   } else {
//       console.log(`Your salary is R${salary}`);
//   }
//    nested if statement
//   if (performance) {
//       if (salary > 5000) {
//           console.log(`Your salary is R${salary + bonus}`);
//       } else {
//           console.log(`Your salary is R${salary}`);
//       }
//   } else {
//       console.log('You didn\'t perform well');
//   }
// Switch statement
//   switch (salary) {
//       case 5000:
//           console.log(`Salary is R${salary}`);
//           break
//       case 7000:
//           console.log(`Salary is R${salary}`);
//           break
//       default:
//           console.log(`This ${salary} was not included in one of the case`);
//       break
//   }

//   let performance = true
//   let salary = 7000
//   let bonus = 500
//     document.querySelector(`[output]`)
// function calculateSalary() {
//     let salary =
//     + document.querySelector(`[salary]`).value
//     let bonus = document.querySelector(`[bonus]`).value
//     let performance = document.querySelector(`[performance]`).value
//     let output = document.querySelector(`[output]`)
//     if (performance) 
//     }

// Initialize a variable called marks
// Make use of switch to do the following tasks:
// NB: Display the value on the console
// 100 -> A
// 90 - 99 -> B
// 80 - 89 -> C
// 75 - 79 -> D
// 70 - 75 -> E
// 50 - 69 -> Passed
// < 50 -> Failed

let marks = 71
switch (true) {
    case marks >= 100:
        console.log('A');
        break
    case marks >= 90 && marks <= 99: 
        console.log('B');
        break
    case marks >= 80 && marks <= 89:
        console.log('C');
        break
    case marks >= 75 && marks <= 79:
        console.log('D');
        break
    case marks >= 70 && marks <= 75:
        console.log('E');
        break
    case marks >= 50 && marks <= 69:
        console.log('Passed');
        break
    case marks < 50:
        console.log('Failed');
        break
}