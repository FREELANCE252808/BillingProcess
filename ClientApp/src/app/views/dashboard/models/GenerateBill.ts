export class GenerateBill {
  billId: number;
  cutOffDate: Date;
  documentDate: Date;
  description: string;
  customer: any[];
  cases: any[];
  stages: any[];
  tasks: any[];

  constructor() {
    this.billId = null;
    this.cutOffDate = null;
    this.documentDate = null;
    this.description = '';
    this.customer = [];
    this.cases = [];
    this.stages = [];
    this.tasks = [];
  }
}
