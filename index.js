// Write your solution in this file!
const employee = {
  name: `Dylan`,
  streetAddress: "12 Kwestan",
};

employee.name = "Sam";
console.log(`----------first-function----------`);
// first function: non-destructive

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}
let employeeCopy = updateEmployeeWithKeyAndValue(
  employee,
  "streetAddress",
  "11 Broadway"
);

console.log(employeeCopy);
console.log(`-----------second-function---------`);
// second function : destructive

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

destructivelyUpdateEmployeeWithKeyAndValue(
  employee,
  "streetAddress",
  "12 Broadway"
);

console.log(employee);
console.log(`----------third-function----------`);
// third function: non-destructive

function deleteFromEmployeeByKey(object, key) {
  delete object[key];
  return object;
}

let newEmployee = { ...employee };
deleteFromEmployeeByKey(newEmployee, `name`);

console.log(newEmployee, typeof newEmployee, newEmployee.name);
//console.log(employee);
console.log(`----------fourth-function----------`);
// fourth function : destructive

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

destructivelyDeleteFromEmployeeByKey(employee, `name`);

console.log(employee);
