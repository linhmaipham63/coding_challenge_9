// Task 1: Creating an Employee Class

// Create class Employee
class Employee {
    constructor(name, id, department, salary) {
        this.name = name; // Assign name property (string)
        this.id = id; // Assign id property (number)
        this.department = department; // Assign department property (string)
        this.salary = salary; // Assign salary property (number)
    }

    // Add method getDetails() that returns a formatted string of employee details
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`; 
    }

    // Add method calculateAnnualSalary() that returns the employee’s annual salary
    calculateAnnualSalary() {
        return this.salary * 12; 
    }
}

// Test Cases:
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
console.log(emp1.calculateAnnualSalary()); 

