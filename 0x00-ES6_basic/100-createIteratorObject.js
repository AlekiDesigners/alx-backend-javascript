export default function createIteratorObject(report) {
	  const allEmployees = report.allEmployees;
	  const departments = Object.keys(allEmployees);
	  let currentDepartmentIndex = 0;
	  let currentEmployeeIndex = 0;

	  return {
		      next() {
			            if (currentDepartmentIndex >= departments.length) {
					            return { done: true };
					          }

			            const currentDepartment = departments[currentDepartmentIndex];
			            const employees = allEmployees[currentDepartment];

			            if (currentEmployeeIndex >= employees.length) {
					            currentDepartmentIndex++;
					            currentEmployeeIndex = 0;
					            return this.next();
					          }

			            const value = employees[currentEmployeeIndex];
			            currentEmployeeIndex++;

			            return { value, done: false };
			          },
		      [Symbol.iterator]() {
			            return this;
			          },
		    };
}
