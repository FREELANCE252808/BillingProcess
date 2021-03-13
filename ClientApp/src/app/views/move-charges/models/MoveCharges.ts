import { KeyValue } from '../../add-charges/models/AddCharges';

export class MoveCharges {
  rowId: number;
  case: KeyValue;
  charge: KeyValue;
  task: KeyValue;
  resource: number;
  document: string;
  quantity: number;
  cost: number;

  constructor() {
    this.rowId = 0;
    this.case = new KeyValue();
    this.charge = new KeyValue();
    this.task = new KeyValue();
    this.resource = 0;
    this.document = '';
    this.quantity = 0;
    this.cost = 0;
  }
}
