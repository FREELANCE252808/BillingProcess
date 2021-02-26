import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
	name: 'missingIncompleteReport'
})
export class MissingIncompleteReportPipe implements PipeTransform {
	transform(data: any[], arg: string): any {
		debugger;
		if (data != null && data != undefined) {
			return data.filter(item => {
				debugger;
				if (arg) {
					debugger;
					const searchInput = arg.toLowerCase();
					const departmentName = item.departmentName == null ? "" : item.departmentName.toLowerCase();
					const Complete = item.Complete == null ? "" : item.Complete.toLowerCase();
					const Incomplete = item.Incomplete == null ? "" : item.Incomplete.toLowerCase();
					const Missing = item.Missing == null ? "" : item.Missing.toLowerCase();
					if (Complete.includes(searchInput) || Incomplete.includes(searchInput) || Missing.includes(searchInput) || departmentName.includes(searchInput)) {
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
