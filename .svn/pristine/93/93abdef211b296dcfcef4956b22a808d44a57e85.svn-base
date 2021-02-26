import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment'

@Pipe({
	name: 'NewActivityfilter'
})
export class NewActivityfilterPipe implements PipeTransform {
	transform(data: any[], arg: string): any {
		if (data != null && data != undefined) { 
			return data.filter(item => {
				if (arg) {
					const searchInput = arg.toLowerCase();
                    const ActivityName = item.ActivityName == null ? "" : item.ActivityName.toLowerCase();
                    const ActivityNo = item.ActivityNo;
                    const Status = item.Status == null ? "" : item.Status.toLowerCase();
                    const ActivityType = item.ActivityType == null ? "" : item.ActivityType.toLowerCase();
                    const ProjectCode = item.ProjectCode == null ? "" : item.ProjectCode.toLowerCase();
                    const ActualActivityName = item.ActualActivityName==null ? "" : item.ActualActivityName.toLowerCase();
                    const ApprovedDate = item.ApprovedDate == null ? "" : moment(new Date(item.ApprovedDate)).format("MM/DD/YYYY");
                    const FromDate = item.FromDate == null ? "" : moment(new Date(item.FromDate)).format("MM/DD/YYYY");
                    const ToDate = item.ToDate == null ? "" : moment(new Date(item.ToDate)).format("MM/DD/YYYY");
					

                    if (ActivityName.includes(searchInput) || ActivityNo.includes(searchInput) ||
                        Status.includes(searchInput) || ActivityType.includes(searchInput) ||
                        ProjectCode.includes(searchInput) || ActualActivityName.includes(searchInput)||
                        ApprovedDate.includes(searchInput) || FromDate.includes(searchInput) || ToDate.includes(searchInput))
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
