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


// Task 2: Creating a Manager Class (Inheritance & Method Overriding)

// Create a Manager class that extends Employee
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize; // Add new property: teamSize (number)
    }

    // Override getDetails() to include the team size
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    // Add method calculateBonus() that returns 10% of the manager’s annual salary
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1;
    }
}

// Test Cases:
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); 
console.log(mgr1.calculateBonus()); 


// Task 3: Creating a Company Class

// Create Company class
class Company {
    constructor(name, employees) {
        this.name = name; // Assign property name (string) for the company’s name
        this.employees = []; // Assign array employees to store employee objects
    }

    // Add method addEmployee(employee) to add an employee to the array
    addEmployee(employee) {
        return this.employees.push(employee); 
    }

    // Add method listEmployees() to log all employees’ details
    listEmployees() {
        return this.employees.map(employee => console.log(`${employee.getDetails()}`)); 
    }
}

// Test Cases:
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();

