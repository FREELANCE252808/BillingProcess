export class KeyValue {
  key: number;
  value: string;

  constructor() {
    this.key = null;
    this.value = '';
  }
}
export class AddCharges {
  rowId: number;
  date: Date;
  case: KeyValue;
  stage: KeyValue;
  task: KeyValue;
  resource: number;
  description: string;
  quantity: number;
  uom: string;
  rate: number;
  totalBillingAmount: number;
  comments: string;
  more: boolean;

  constructor() {
    this.rowId = null;
    this.date = null;
    this.case = null;
    this.stage = null;
    this.task = null;
    this.resource = null;
    this.description = '';
    this.quantity = null;
    this.uom = '';
    this.rate = null;
    this.totalBillingAmount = null;
    this.comments = '';
    this.more = false;
  }
}
