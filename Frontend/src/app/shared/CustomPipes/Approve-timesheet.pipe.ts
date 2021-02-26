import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'ApproveTimesheetFilter'
})
export class ApproveTimesheetFilterPipe implements PipeTransform {
	transform(data: any[], arg: string): any {
		if (data != null && data != undefined) { 
			return data.filter(item => {
				if (arg) {
					const searchInput = arg.toLowerCase();
                    const UserName = item.UserName == null ? "" : item.UserName.toLowerCase();
                    const Week = item.Week == null ? "" : item.Week+"";
                    const NT = item.NT == null ? "" : item.NT+"";
                    const OT = item.OT == null ? "" : item.OT+"";
                    const Status = item.Status == null ? "" : item.Status.toLowerCase();
                   
					

                    if (UserName.includes(searchInput) || Week.includes(searchInput) ||
                        NT.includes(searchInput) || OT.includes(searchInput) ||
                        Status.includes(searchInput))
                     {
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
