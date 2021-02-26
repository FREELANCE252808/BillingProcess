import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'searchInEmailDtails'
})
export class EmailListSearch implements PipeTransform {
	transform(data: any[], arg: string): any {
		return data.filter(item => {
			debugger;
			if (arg) {
				const searchInput = arg.toLowerCase();
				const from = item.From.toLowerCase();
				const to = item.To.toLowerCase();
				const subject = item.Subject.toLowerCase();
				if (from.includes(searchInput) || to.includes(searchInput) || subject.includes(searchInput)) {
					return item;
				}
			}
			else {
				return data;
			}
		});
	}
}
