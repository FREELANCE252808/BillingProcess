import { BaseModel } from './_base.model';

export class MaterialItemsModel extends BaseModel {
	  
	Item: string;
	ItemCode: string;
	Type: string;
	Capacity: string;
	Make: string;
	UnitID: number;
	UnitPrice: string;
	UnitPriceJS: string;
	CurrencyID: number;
	MaterialItemsID: number;
	

	clear() {
		this.Item = '';
		this.ItemCode = '';
		this.Type = '';
		this.Capacity = '';
		this.Make = '';
		this.UnitID = 0;
		this.UnitPrice = '';
		this.UnitPriceJS = '';
		this.CurrencyID = 0;
		this.MaterialItemsID = 0;
		
		
	}
}
