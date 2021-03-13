
// GET API for fetching list of sage bills   /api/fetchSageBills/{userId}
//List of SageBill data of response API - /api/fetchSageBills/{userId}
ListSagebills: [{id: 1, value: 'SAGEBILL0001'}, {id: 2, value: 'SAGEBILL0002'}]


// GET Entire bill details from sage bills   /api/fetchSageBill/{sageBillNumber}
//SAGEBILL0002
// Expected Response from SAGE system
{
  sageBillingNo: "SAGEBILL0002",
  billingWorksheetDescription: "Test Description",
  documentDate: '25-01-2021',
	currency: "GBP",
  WIPAmount:500,
  worksheetAmount:500,
  BillingWorksheetLineItem: [
    {

      	"Customer":"ABCD",
        "CustomerID": 1,
        "Case":"Testing",
        "CaseID":1,
        "Task":"Task Testing",
        "TaskID": 1,
        "Stage":"Stage Testing",
        "StageID": 1,
        "ResourceID":1,
        "ResourceDesc":"Description",
        "Qty":5,
        "UOM":"GBP",
        "Rate":200,
        "TotalBillingAmount":1000,
        "Comments":"Testing",
        "isOptionalFieldExists": true,
        "optionalFields":[{
          "FieldId":1,
          "FieldName": "File",
          "FieldValue": "Text Description"
        },{
          "FieldId":2,
          "FieldName": "Folder",
          "FieldValue": "Text Description 2"
        }]
    }
  ]

}


// Reference Datafor Dropdown
// api/getReferenceDataforDropdown

{
  customer: [{customerId:1, customerName: "Customer 1"},{customerId:2, customerName: "Customer 2"}],
  cases: [{caseId:1, caseName: "Case 1"},{caseId:2, caseName: "Case 2"}],
  stages:[{stageId:1, stageName: "Stage 1"},{stageId:2, stageName: "Stage 2"}],
  tasks:[{taskId:1, taskName: "Task 1"},{taskId:2, taskName: "Task 2"}],
  resources:[{resourceId:1, resourceName: "Resource 1"},{resourceId:2, resourceName: "Resource 2"}],
  optionalFields: [{fieldId:1, fieldName: "Resource 1"},{fieldId:2, fieldName: "Resource 2"}],
}

// Generate Bill Id
// API Type: POST
// API NAME: /api/generateBillData
// Request Payload
{
  billingNo: 'ARBILL00001',
  customersList: [{customerId:1, customerName: "Customer 1"},{customerId:2, customerName: "Customer 2"}],
  casesList: [{caseId:1, caseName: "Case 1"},{caseId:2, caseName: "Case 2"}],
  stagesList:[{stageId:1, stageName: "Stage 1"},{stageId:2, stageName: "Stage 2"}],
  tasksList:[{taskId:1, taskName: "Task 1"},{taskId:2, taskName: "Task 2"}],
  cutOffBy:'25-01-2021',
  documentDate:'29-01-2021',
  description: "Test Descrip",
}

// Expected Response
{
  billingNo: 'ARBILL00001',
  sageBillingNo: "SAGEBILL0002",
  billingWorksheetDescription: "Test Description",
  documentDate: '25-01-2021',
	currency: "GBP",
  WIPAmount:500,
  worksheetAmount:500,
  BillingWorksheetLineItem: [
    {

      	"Customer":"ABCD",
        "CustomerID": 1,
        "Case":"Testing",
        "CaseID":1,
        "Task":"Task Testing",
        "TaskID": 1,
        "Stage":"Stage Testing",
        "StageID": 1,
        "ResourceID":1,
        "ResourceDesc":"Description",
        "Qty":5,
        "UOM":"GBP",
        "Rate":200,
        "TotalBillingAmount":1000,
        "Comments":"Testing",
        "isOptionalFieldExists": true,
        "optionalFields":[{
          "FieldId":1,
          "FieldName": "File",
          "FieldValue": "Text Description"
        },{
          "FieldId":2,
          "FieldName": "Folder",
          "FieldValue": "Text Description 2"
        }]
    }
  ]

}


// GET  bill details from sage system-   /api/fetchbillingNoFromSage/{billingNo}

// Expected Response from SAGE system
{
  billingNo: 'ARBILL00001',
  sageBillingNo: "SAGEBILL0002",
  billingWorksheetDescription: "Test Description",
  documentDate: '25-01-2021',
	currency: "GBP",
  WIPAmount:500,
  worksheetAmount:500,
  BillingWorksheetLineItem: [
    {

      	"Customer":"ABCD",
        "CustomerID": 1,
        "Case":"Testing",
        "CaseID":1,
        "Task":"Task Testing",
        "TaskID": 1,
        "Stage":"Stage Testing",
        "StageID": 1,
        "ResourceID":1,
        "ResourceDesc":"Description",
        "Qty":5,
        "UOM":"GBP",
        "Rate":200,
        "TotalBillingAmount":1000,
        "Comments":"Testing",
        "isOptionalFieldExists": true,
        "optionalFields":[{
          "FieldId":1,
          "FieldName": "File",
          "FieldValue": "Text Description"
        },{
          "FieldId":2,
          "FieldName": "Folder",
          "FieldValue": "Text Description 2"
        }]
    }
  ]

}


//POST API Data formate needed -from  selected line item of Web App  ?

