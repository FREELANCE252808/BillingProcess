import { Pipe, PipeTransform } from "@angular/core";
//import { NewActivity } from "../../../../core/models/NewActivity.model";


@Pipe({
  name: 'ClientContractSearch'
})
export class ClientContractSearchList implements PipeTransform {
	transform(data: any[], arg: string): any {
		return data.filter(item => {
			debugger;
			if (arg) {
				const searchInput = arg.toLowerCase();
				const ClientContractName = item.ClientContractName.toLowerCase();
				const ClientContractCode = item.ClientContractCode.toLowerCase();
				const ClientName = item.ClientName.toLowerCase();
				if (ClientContractName.includes(searchInput) || ClientContractCode.includes(searchInput) || ClientName.includes(searchInput)) {
					return item;
				} 
			}
			else {
				return data;
			}
		});
	}
}
