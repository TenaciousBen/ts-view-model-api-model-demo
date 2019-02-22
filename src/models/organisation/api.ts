import { OrganisationViewModel, EmployeeViewModel, DepartmentViewModel } from "./view";

export interface OrganisationApiModelResponse {
	id?: number | null;
	name?: string | null;
	isBankrupt?: boolean | null;
	departments?: DepartmentApiModelResponse[] | null;
}

export interface DepartmentApiModelResponse {
	id?: number | null;
	name?: string | null;
	headcount?: number | null;
	employees?: EmployeeApiModelResponse[] | null;
}

export interface EmployeeApiModelResponse {
	id?: number | null;
	name?: string | null;
	yearsOfEmployment?: number | null;
}

export class OrganisationApiModel implements OrganisationApiModelResponse {
	id?: number | null;
	name?: string | null;
	isBankrupt?: boolean | null;
	departments?: DepartmentApiModelResponse[] | null;
	constructor(organisation: OrganisationViewModel) {
		this.id = organisation.id;
		this.name = organisation.name;
		this.isBankrupt = organisation.isBankrupt();
		this.departments = organisation.departments.map(d => new DepartmentApiModel(d));
	}
}

export class DepartmentApiModel implements DepartmentApiModelResponse {
	id?: number | null;
	name?: string | null;
	headcount?: number | null;
	employees?: EmployeeApiModelResponse[] | null;

	constructor(department: DepartmentViewModel) {
		this.id = department.id;
		this.name = department.name;
		this.headcount = department.headcount;
		this.employees = department.employees.map(e => new EmployeeApiModel(e));
	}
}

export class EmployeeApiModel implements EmployeeApiModelResponse {
	id?: number | null;
	name?: string | null;
	yearsOfEmployment?: number | null;

	constructor(employee: EmployeeViewModel) {
		this.id = employee.id;
		this.name = employee.name;
		this.yearsOfEmployment = employee.yearsOfEmployment;
	}
}