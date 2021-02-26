import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
	name: 'searchUsersPipe'
})
export class SearchUsersPipe implements PipeTransform {
	transform(data: any[], arg: string): any {
		debugger;
		if (data != null && data != undefined) {
			return data.filter(item => {
				debugger;
				if (arg) {
					debugger;
					const searchInput = arg.toLowerCase();
					const FirstName = item.FirstName.toLowerCase();
					const LastName = item.LastName.toLowerCase();
					const EmailId = item.EmailId.toLowerCase();
					const DepartmentName = item.DepartmentName == null ? "" : item.DepartmentName.toLowerCase();
					//const DesignationName = item.DesignationName.toLowerCase();
					//const Username = item.Name.toLowerCase();
					//const ProjectCode = item.ProjectCode.toLowerCase();
					if (FirstName.includes(searchInput) || LastName.includes(searchInput) || EmailId.includes(searchInput) || DepartmentName.includes(searchInput)) {
						return item;
					}
				}
				else {
					return data;
				}
			});
		}
	}
}
