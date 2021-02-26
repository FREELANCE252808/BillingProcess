import { BaseModel } from './_base.model';

export class CurrencyModel extends BaseModel {
	id: number;
	CurrencyName: string;
	CurrencyCode: string;


	clear() {
		this.CurrencyName = '';
		this.CurrencyCode = '';
		this.id = 0;

	}
}
