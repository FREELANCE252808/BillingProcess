import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment';
//import { NewActivity } from "../../../../core/models/NewActivity.model";


@Pipe({
  name: 'OverTimeSearch'
})
export class SearchOverTimeList implements PipeTransform {
	transform(data: any[], arg: string): any {
		if (data != null && data != undefined) {
			return data.filter(item => {
				debugger;
				if (arg) {
					const searchInput = arg.toLowerCase();
					const TaskName = item.TaskName.toLowerCase();
					const FromDate = moment(new Date(item.FromDate)).format("MM/DD/YYY");
					const ToDate = moment(new Date(item.ToDate)).format("MM/DD/YYY");
					const ProjectCode = item.ProjectCode.toLowerCase();
					const ApproveStatus = item.ApproveStatus.toLowerCase();
					const OtHours = item.OtHours.toString();
					const OtJustification = item.OtJustification.toLowerCase();
					if (OtHours.includes(searchInput) ||TaskName.includes(searchInput) || FromDate.includes(searchInput) || ToDate.includes(searchInput) || ProjectCode.includes(searchInput) || OtJustification.includes(searchInput) || ApproveStatus.includes(searchInput)) {
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
