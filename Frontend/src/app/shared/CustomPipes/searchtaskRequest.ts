import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
	name: 'searchtaskRequest'
})
export class searchtaskRequestPipe implements PipeTransform {
	transform(data: any[], arg: string): any {
		if (data != null && data != undefined) { 
			return data.filter(item => {
				if (arg) {
					const searchInput = arg.toLowerCase();
					const TaskNo = item.TaskNo.toLowerCase();
					const ProjectCode = item.ProjectCode.toLowerCase();
					const TaskName = item.TaskName.toLowerCase();
					const TaskStatus = item.TaskStatus.toLowerCase();
					const TaskOwnerName = item.TaskOwnerName.toLowerCase();
					
					if (TaskNo.includes(searchInput) || ProjectCode.includes(searchInput) ||
						TaskName.includes(searchInput) || TaskStatus.includes(searchInput) ||
						TaskOwnerName.includes(searchInput)) {
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
