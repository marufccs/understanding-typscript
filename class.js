"use strict";
// Class
class Department {
    constructor(name) {
        this.name = name;
        // public name: string;
        this.employees = [];
        // this.name = n;
    }
    //Static Method
    static createEmployee(name) {
        return { name: name };
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
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    constructor(reports) {
        super("Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(name) {
        if (name === "Maruf") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
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
//Using Static Method
const employee1 = Department.createEmployee("Shohag");
accounting.printEmployeeInformation();
console.log(accounting);
