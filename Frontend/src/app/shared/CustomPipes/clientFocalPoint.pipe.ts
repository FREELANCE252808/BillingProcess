import { Pipe, PipeTransform } from "@angular/core";
//import { NewActivity } from "../../../../core/models/NewActivity.model";


@Pipe({
  name: 'ClientFocalPointSearch'
})
export class ClientFocalPointSearchList implements PipeTransform {
	transform(data: any[], arg: string): any {
		return data.filter(item => {
			debugger;
			if (arg) {
				const searchInput = arg.toLowerCase();
				const ClientFocalName = item.ClientFocalName.toLowerCase();
				const ClientFocalCode = item.ClientFocalCode.toLowerCase();
				const ClientName = item.ClientName.toLowerCase();
				if (ClientFocalName.includes(searchInput) || ClientFocalCode.includes(searchInput) || ClientName.includes(searchInput)) {
					return item;
				} 
			}
			else {
				return data;
			}
		});
	}
}
