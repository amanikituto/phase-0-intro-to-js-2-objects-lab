// Initialize employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update employee with key and value (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to update employee with key and value (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete property from employee object (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete property from employee object (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage
  console.log("Original Employee:", employee);
  
  // Non-destructive update
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
  console.log("Updated Employee (Non-destructive):", updatedEmployee);
  
  // Destructive update
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Oak St");
  console.log("Updated Employee (Destructive):", employee);
  
  // Non-destructive deletion
  let employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee without Address (Non-destructive):", employeeWithoutAddress);
  
  // Destructive deletion
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log("Employee without Name (Destructive):", employee);
  