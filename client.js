const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function employeeCalculator(employees) {
  let newObj = {
    name: '',
    bonusPercentage: '',
    totalCompensation: '',
    totalBonus: ''
  };
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].reviewRating <= 2) {
      console.log(newObj.bonusPercentage);
      newObj.bonusPercentage = 0;
    }
    else if (employees[i].reviewRating === 3) {
      console.log(newObj.bonusPercentage);
      newObj.bonusPercentage = 1;
    }
    
  }
  return newObj;
}
// Atticus rating 3, bonus 4% and 5% bonus = 9% total
// Jem rating 4, bonus 6%
// Scout rating 5, bonus 10% and 5% bonus = 15 % total but max 13%, maybe 12
// Robert rating 1, no bonus
// Mayella rating 1, no bonus

console.log(employeeCalculator(employees));

