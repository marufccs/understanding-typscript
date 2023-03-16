// Class
class Department {
  // public name: string;
  protected employees: string[] = [];

  constructor(public name: string) {
    // this.name = n;
  }

  //Static Method
  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department (${this.name})`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

//Inheritance (with the extend keyword you get all the data from the previous class)
class ITDepartment extends Department {
  admins: string[];
  constructor(admins: string[]) {
    super("Nice");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  constructor(private reports: string[]) {
    super("Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Maruf") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
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
