export class AddCharges {
  date: Date;
  case: string;
  stage: string;
  task: string;
  resource: number;
  resourceDescription: string;
  quantity: number;
  uom: string;
  rate: number;
  totalBillingAmount: number;
  comments: string;
  more: boolean;

  constructor() {
    this.date = null;
    this.case = '';
    this.stage = '';
    this.task = '';
    this.resource = null;
    this.resourceDescription = '';
    this.quantity = null;
    this.uom = '';
    this.rate = null;
    this.totalBillingAmount = null;
    this.comments = '';
    this.more = false;
  }
}
