import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
  name: 'searchInput'
})
export class searchOnInput implements PipeTransform {
	transform(data: any[], arg: string): any {
		return data.filter(item => {
			debugger;
			if (arg) {
				const SearchInput = arg.toLowerCase();
				const WBSName = item.WBSName.toLowerCase();
				const WbsCode = item.WbsCode.toLowerCase();
				const ParentWBS = item.ParentWBS == null ? "": item.ParentWBS.toLowerCase();
				const ParentCode = item.ParentCode == null ? "" :item.ParentCode.toLowerCase();
				if (WBSName.includes(SearchInput) || WbsCode.includes(SearchInput) || ParentWBS.includes(SearchInput) || ParentCode.includes(SearchInput)) {
					return item;
				}
			}
			else {
				return data;
			}
		});
	}
}
