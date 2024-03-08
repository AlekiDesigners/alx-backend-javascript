export default function iterateThroughObject(reportWithIterator) {
	    let employeeNames = [];

	    for (const departmentEmployees of reportWithIterator) {
		            if (typeof departmentEmployees === 'string') {
				                employeeNames.push(departmentEmployees);
				            } else if (Array.isArray(departmentEmployees)) {
						                employeeNames.push(...departmentEmployees);
						            }
		        }

	    return employeeNames.join(' | ');
}

