import { Pipe, PipeTransform } from "@angular/core";
//import { NewActivity } from "../../../../core/models/NewActivity.model";


@Pipe({
  name: 'ClientAssetSearch'
})
export class ClientAssetSearchList implements PipeTransform {
	transform(data: any[], arg: string): any {
		return data.filter(item => {
			debugger;
			if (arg) {
				const searchInput = arg.toLowerCase();
				const ClientAssetName = item.ClientAssetName.toLowerCase();
				const ClientAssetCode = item.ClientAssetCode.toLowerCase();
				const ClientName = item.ClientName.toLowerCase();

				if (ClientAssetName.includes(searchInput) || ClientAssetCode.includes(searchInput) || ClientName.includes(searchInput)) {
					return item;
				} 
			}
			else {
				return data;
			}
		});
	}
}
