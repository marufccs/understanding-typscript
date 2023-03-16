"use strict";
// Class
class Department {
    constructor(name) {
        this.name = name;
        // public name: string;
        this.employees = [];
        // this.name = n;
    }
    describe() {
        console.log(`Department (${this.name})`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
//Inheritance (with the extend keyword you get all the data from the previous class)
class ITDepartment extends Department {
    constructor(admins) {
        super("Nice");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(reports) {
        super("Accounting");
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === "Maruf") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accountings = new AccountingDepartment([]);
accountings.addReport("Report goes here");
accountings.printReports();
const accounting = new ITDepartment(["Max"]);
accounting.addEmployee("Maruf");
accounting.addEmployee("Shihab");
accounting.addEmployee("Niloy");
accounting.printEmployeeInformation();
console.log(accounting);
