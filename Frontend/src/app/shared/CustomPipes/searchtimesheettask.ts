import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
	name: 'searchtimesheettask'
})
export class SearchTimeSheetTaskPipe implements PipeTransform {
	transform(data: any[], arg: string): any {
		debugger;
		if (data != null && data != undefined) {
			return data.filter(item => {
				debugger;
				if (arg) {
					debugger;
					const searchInput = arg.toLowerCase();
					const ProjectName = item.ProjectName.toLowerCase();
					const TaskName = item.TaskName.toLowerCase();
					if (ProjectName.includes(searchInput) || TaskName.includes(searchInput)) {
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
