import { OrganisationApiModelResponse, DepartmentApiModelResponse, EmployeeApiModelResponse } from "./api";
import { valueOrDefault } from "../../utilities/value";

export class OrganisationViewModel {
	id: number;
	name: string;
	departments: DepartmentViewModel[];
	costs: number;
	revenue: number;

	constructor(organisation: OrganisationApiModelResponse, costs: number, revenue: number) {
		this.id = valueOrDefault(organisation.id, -1); 
		this.name = valueOrDefault(organisation.name, "");
		let departments = valueOrDefault(organisation.departments, []);
		this.departments = departments.map(d => new DepartmentViewModel(d));
		this.costs = costs;
		this.revenue = revenue;
	}
	
	isBankrupt() {
		return this.costs > this.revenue;
	}
}

export class DepartmentViewModel {
	id: number;
	name: string;
	headcount: number;
	employees: EmployeeViewModel[];

	constructor(department: DepartmentApiModelResponse) {
		this.id = valueOrDefault(department.id, -1); 
		this.name = valueOrDefault(department.name, "");
		let employees = valueOrDefault(department.employees, []);
		this.employees = employees.map(e => new EmployeeViewModel(e));
		this.headcount = this.employees.length;
	}

	isEmpty() {
		return this.headcount === 0;
	}

	seniorEmployees() {
		return this.employees.filter(e => e.isSenior());
	}
}

export class EmployeeViewModel {
	id: number;
	name: string;
	yearsOfEmployment: number;
	
	constructor(employee: EmployeeApiModelResponse) {
		this.id = valueOrDefault(employee.id, -1); 
		this.name = valueOrDefault(employee.name, "");
		this.yearsOfEmployment = valueOrDefault(employee.yearsOfEmployment, -1);
	}

	isSenior() {
		return this.yearsOfEmployment > 30;
	}
}