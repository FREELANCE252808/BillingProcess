// USA
export const locale = {
	lang: 'en',
	data: {
		TRANSLATOR: {
			SELECT: 'Select your language',
		},
		MENU: {
			NEW: 'new',
			ACTIONS: 'Actions',
			CREATE_POST: 'Create New Post',
			REPORTS: 'Reports',
			APPS: 'Apps',
			DASHBOARD: 'Dashboard'
		},
		AUTH: {
			GENERAL: {
				OR: 'Or',
				SUBMIT_BUTTON: 'Submit',
				NO_ACCOUNT: 'Don\'t have an account?',
				SIGNUP_BUTTON: 'Signup',
				FORGOT_BUTTON: 'Forgot Password',
				BACK_BUTTON: 'Back',
				PRIVACY: 'Privacy',
				LEGAL: 'Legal',
				CONTACT: 'Contact',
			},
			LOGIN: {
				TITLE: 'SmartWork',
				BUTTON: 'Sign In',
			},
			FORGOT: {
				TITLE: 'Forgotten Password?',
				DESC: 'Enter your valid email to reset your password',
			},
			REGISTER: {
				TITLE: 'Sign Up',
				DESC: 'Enter your details to create your account',
				SUCCESS: 'Your account has been successfuly registered. Please use your registered account to login.'
			},
			INPUT: {
				COMPANYNAME: 'Company name',
				COMPANYCONTACT: 'Contact number',
				EMAIL: 'Email',
				FIRSTNAME: 'First name',
				LASTNAME: 'Last name',
				PASSWORD: 'Password',
				CONFIRM_PASSWORD: 'Confirm Password',
				EMAILEXISTS: 'EmailID already registered.',

			},
			EMAILINTIGRATION: {
				VERIFY: {
					MESSAGE: 'Email intigration verified successfully.'
				},
				SAVE: {
					MESSAGE: 'Email intigration detail data updateded successfully.'
				},
				ERROR: {
					ERROR: 'Oops something went wrong.'
				}
			},
			VALIDATION: {
				INVALID: '{{name}} is not valid',
				REQUIRED: '{{name}} is required',
				MIN_LENGTH: '{{name}} minimum length is {{min}}',
				AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
				NOT_FOUND: 'The requested {{name}} is not found',
				INVALID_LOGIN: 'The login detail is incorrect',
				EMAILEXISTS: 'EmailID already registered.',
				PASSWORD_SENT: 'An email with new password is sent to your registered email address.Please check.',
				PASSWORD_VALIDATE: 'Wrong password.Please check.',
				PASSWORD_CHANGE: 'You password has been change successfuly.'
			}
		},
		ECOMMERCE: {
			COMMON: {
				SELECTED_RECORDS_COUNT: 'Selected records count: ',
				ALL: 'All',
				SUSPENDED: 'Suspended',
				ACTIVE: 'Active',
				FILTER: 'Filter',
				BY_STATUS: 'by Status',
				BY_TYPE: 'by Type',
				BUSINESS: 'Business',
				INDIVIDUAL: 'Individual',
				SEARCH: 'Search',
				IN_ALL_FIELDS: 'in all fields'
			},
			ECOMMERCE: 'eCommerce',
			CUSTOMERS: {
				CUSTOMERS: 'Customers',
				CUSTOMERS_LIST: 'Customers list',
				NEW_CUSTOMER: 'New Customer',
				DELETE_CUSTOMER_SIMPLE: {
					TITLE: 'Customer Delete',
					DESCRIPTION: 'Are you sure to permanently delete this customer?',
					WAIT_DESCRIPTION: 'Customer is deleting...',
					MESSAGE: 'Customer has been deleted'
				},
				DELETE_CUSTOMER_MULTY: {
					TITLE: 'Customers Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected customers?',
					WAIT_DESCRIPTION: 'Customers are deleting...',
					MESSAGE: 'Selected customers have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected customers',
					MESSAGE: 'Selected customers status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Customer has been updated',
					ADD_MESSAGE: 'Customer has been created'
				}
			}
		},





		COMMON_MGS: {
			ERROR: {
				ERROR_MGS: 'Oops something went wrong.',
			},
			UPDATED: {
				UPDATE_MGS: 'Record has been updated successfully.',
			},
			ADDED: {
				ADD_MGS: 'Record has been added successfully.',
			},
			DELETED: {
				DELETE_MGS: 'Record has been deleted successfully.',
			},
			DUPLICATE: {
				DUPLICATE_MGS: 'Duplicate Record found.',
			},
		},



		ADMIN: {
			COMMON: {
				SELECTED_RECORDS_COUNT: 'Selected records count: ',
				ALL: 'All',
				SUSPENDED: 'Suspended',
				ACTIVE: 'Active',
				FILTER: 'Filter',
				BY_STATUS: 'by Status',
				BY_TYPE: 'by Type',
				BUSINESS: 'Business',
				INDIVIDUAL: 'Individual',
				SEARCH: 'Search',
				IN_ALL_FIELDS: 'in all fields'
			},
			ADMIN: 'Admin',
			USERS: {
				USERS: 'Users',
				USERS_LIST: 'Users',
				NEW_USER: 'New User',
				DELETE_USER_SIMPLE: {
					TITLE: 'User Delete',
					DESCRIPTION: 'Are you sure to permanently delete this User?',
					WAIT_DESCRIPTION: 'User is deleting...',
					MESSAGE: 'User has been deleted'
				},
				DELETE_USER_MULTY: {
					TITLE: 'User Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Users?',
					WAIT_DESCRIPTION: 'Users are deleting...',
					MESSAGE: 'Selected Users have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Users',
					MESSAGE: 'Selected Users status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'User has been updated',
					ADD_MESSAGE: 'User has been created'
				}
			},

			ROLE: {
				ROLE: 'Role',
				ROLE_LIST: 'Roles',
				NEW_ROLE: 'New Role',
				DELETE_ROLE_SIMPLE: {
					TITLE: 'Role Delete',
					DESCRIPTION: 'Are you sure to permanently delete this role?',
					WAIT_DESCRIPTION: 'Role is deleting...',
					MESSAGE: 'Role has been deleted'
				},
				DELETE_ROLE_MULTY: {
					TITLE: 'Role Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Roles?',
					WAIT_DESCRIPTION: 'Roles are deleting...',
					MESSAGE: 'Selected roles have been deleted',
					ERRMSGSINGLE: '{{msg}} role could not be deleted since it is in use.',
					ERRMSGMULTY: "Following roles '{{msg}}' could not be deleted since they are in use."
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Users',
					MESSAGE: 'Selected Roles status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Role has been updated',
					ADD_MESSAGE: 'Role has been created',
					DUPLICATE_MESSAGE: 'A role with same name already exists.'
				},
				ROLEPERMISSION: {
					ASSIGNPERMISSION: 'Selected Roles rights have successfully been updated.'
				}
			},


			USER: {
				USER: 'User',
				USER_LIST: 'Users',
				NEW_NEW: 'New User',
				DELETE_USER_SIMPLE: {
					TITLE: 'User Delete',
					DESCRIPTION: 'Are you sure to permanently delete this user?',
					WAIT_DESCRIPTION: 'User is deleting...',
					MESSAGE: 'User has been deleted'
				},
				DELETE_USER_MULTY: {
					TITLE: 'Users Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Users?',
					WAIT_DESCRIPTION: 'Users are deleting...',
					MESSAGE: 'Selected Users have been deleted',
					ERRMSGSINGLE: '{{msg}} Users could not be deleted since it is in use.',
					ERRMSGMULTY: "Following Users '{{msg}}' could not be deleted since they are in use."
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Users',
					MESSAGE: 'Selected Users status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Users has been updated',
					ADD_MESSAGE: 'Users has been created',
					DUPLICATE_MESSAGE: 'A User with same name already exists.'
				},
				ROLEPERMISSION: {
					ASSIGNPERMISSION: 'Selected Users rights have successfully been updated.'
				}
			},

			CURRENCY: {
				CURRENCY: 'Currency',
				CURRENCY_LIST: 'Currencys',
				NEW_CURRENCY: 'New Currency',
				DELETE_CURRENCY_SIMPLE: {
					TITLE: 'Currency Delete',
					DESCRIPTION: 'Are you sure to permanently delete this currency?',
					WAIT_DESCRIPTION: 'Currency is deleting...',
					MESSAGE: 'Currency has been deleted'
				},
				DELETE_CURRENCY_MULTY: {
					TITLE: 'Currency Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Currency?',
					WAIT_DESCRIPTION: 'Currency are deleting...',
					MESSAGE: 'Selected Currency have been deleted',
					ERRMSGSINGLE: '{{msg}} Currency could not be deleted since it is in use.',
					ERRMSGMULTY: "Following Currency '{{msg}}' could not be deleted since they are in use."
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Users',
					MESSAGE: 'Selected Currencys status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Currency has been updated',
					ADD_MESSAGE: 'Currency has been created',
					DUPLICATE_MESSAGE: 'A Currency with same name already exists.'
				},
				ROLEPERMISSION: {
					ASSIGNPERMISSION: 'Selected Currencys rights have successfully been updated.'
				}
			},

			PROJECTTYPE: {
				PROJECTTYPE: 'Project Type',
				PROJECTTYPE_LIST: 'Project Type',
				NEW_PROJECTTYPE: 'New Project Type',
				DELETE_PROJECTTYPE_SIMPLE: {
					TITLE: 'Project Type Delete',
					DESCRIPTION: 'Are you sure to permanently delete this project type?',
					WAIT_DESCRIPTION: 'Project type is deleting...',
					MESSAGE: 'Project type has been deleted'
				},
				DELETE_PROJECTTYPE_MULTY: {
					TITLE: 'Project type Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected project type?',
					WAIT_DESCRIPTION: 'Project type are deleting...',
					MESSAGE: 'Selected project type have been deleted',
					ERRMSGSINGLE: '{{msg}} Project Type could not be deleted since it is in use.',
					ERRMSGMULTY: "Following Project Type '{{msg}}' could not be deleted since they are in use."
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Users',
					MESSAGE: 'Selected project type status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Project type has been updated',
					ADD_MESSAGE: 'Project type has been created',
					DUPLICATE_MESSAGE: 'A Project Type with same name already exists.'
				}
			},

			DEPARTMENT: {
				DEPARTMENT: 'Departments',
				DEPARTMENT_LIST: 'Departments',
				NEW_DEPARTMENT: 'New Department',
				DELETE_DEPARTMENT_SIMPLE: {
					TITLE: 'Department Delete',
					DESCRIPTION: 'Are you sure to permanently delete this Department?',
					WAIT_DESCRIPTION: 'Department is deleting...',
					MESSAGE: 'Department has been deleted'
				},
				DELETE_DEPARTMENT_MULTY: {
					TITLE: 'Department Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Departments?',
					WAIT_DESCRIPTION: 'Departments are deleting...',
					MESSAGE: 'Selected Departments have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Departments',
					MESSAGE: 'Selected Departments status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Department has been updated',
					ADD_MESSAGE: 'Department has been created'
				}
			},
			PROJECT: {
				PROJECT: 'Project',
				PROJECTT_LIST: 'Projects',
				NEW_PROJECT: 'New Project',
				DELETE_PROJECT_SIMPLE: {
					TITLE: 'Project Delete',
					DESCRIPTION: 'Are you sure to permanently delete this project?',
					WAIT_DESCRIPTION: 'Project is deleting...',
					MESSAGE: 'Project has been deleted'
				},

				EDIT: {
					UPDATE_MESSAGE: 'Project has been updated',
					ADD_MESSAGE: 'Project has been created'
				}
			},


			DESIGNATION: {
				DESIGNATION: 'Designations',
				DESIGNATION_LIST: 'Designations',
				NEW_DESIGNATION: 'New Designation',
				DELETE_DESIGNATION_SIMPLE: {
					TITLE: 'Designation Delete',
					DESCRIPTION: 'Are you sure to permanently delete this Designation?',
					WAIT_DESCRIPTION: 'Designation is deleting...',
					MESSAGE: 'Designation has been deleted'
				},
				DELETE_DESIGNATION_MULTY: {
					TITLE: 'Designation Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Designations?',
					WAIT_DESCRIPTION: 'Designations are deleting...',
					MESSAGE: 'Selected Designations have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Designations',
					MESSAGE: 'Selected Designations status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Designation has been updated',
					ADD_MESSAGE: 'Designation has been created'
				}
			},


			TASKTYPE: {
				TASKTYPE: 'Task Type',
				TASKTYPE_LIST: 'Task Type',
				NEW_TASKTYPE: 'New Task Type',
				DELETE_TASKTYPE_SIMPLE: {
					TITLE: 'Task Type Delete',
					DESCRIPTION: 'Are you sure to permanently delete this Task Type?',
					WAIT_DESCRIPTION: 'Task Type is deleting...',
					MESSAGE: 'Task Type has been deleted'
				},
				DELETE_TASKTYPE_MULTY: {
					TITLE: 'Task Type Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Task Type?',
					WAIT_DESCRIPTION: 'Task Type are deleting...',
					MESSAGE: 'Selected Task Type have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Task Type',
					MESSAGE: 'Selected Task Type status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Task Type has been updated',
					ADD_MESSAGE: 'Task Type has been created'
				}
			},


			PROJECTSTAGE: {
				PROJECTSTAGE: 'Project stage',
				PROJECTSTAGE_LIST: 'Project stages',
				NEW_PROJECTSTAGE: 'New Project stage',
				DELETE_PROJECTSTAGE_SIMPLE: {
					TITLE: 'Project stage delete',
					DESCRIPTION: 'Are you sure to permanently delete this project stage?',
					WAIT_DESCRIPTION: 'Project stage is deleting...',
					MESSAGE: 'Project stage has been deleted'
				},
				DELETE_PROJECTSTAGE_MULTY: {
					TITLE: 'Project stage delete',
					DESCRIPTION: 'Are you sure to permanently delete selected project stage?',
					WAIT_DESCRIPTION: 'Project stage are deleting...',
					MESSAGE: 'Selected project stage have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected project stage',
					MESSAGE: 'Selected project stage status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Project stage has been updated',
					ADD_MESSAGE: 'Project stage has been created'
				}
			},

			PROJECTSTATUS: {
				PROJECTSTATUS: 'Project status',
				PROJECTSTATUS_LIST: 'Project status',
				NEW_PROJECTSTATUS: 'New Project status',
				DELETE_PROJECTSTATUS_SIMPLE: {
					TITLE: 'Project status delete',
					DESCRIPTION: 'Are you sure to permanently delete this project status?',
					WAIT_DESCRIPTION: 'Project status is deleting...',
					MESSAGE: 'Project status has been deleted'
				},
				DELETE_PROJECTSTATUS_MULTY: {
					TITLE: 'Project status delete',
					DESCRIPTION: 'Are you sure to permanently delete selected project status?',
					WAIT_DESCRIPTION: 'Project status are deleting...',
					MESSAGE: 'Selected project status have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected project status',
					MESSAGE: 'Selected project status status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Project status has been updated',
					ADD_MESSAGE: 'Project status has been created'
				}
			},


			TAXCODE: {
				TAXCODE: 'Tax code',
				TAXCODE_LIST: 'Tax code',
				NEW_TAXCODE: 'New Tax code',
				DELETE_TAXCODE_SIMPLE: {
					TITLE: 'Tax code Delete',
					DESCRIPTION: 'Are you sure to permanently delete this Tax code?',
					WAIT_DESCRIPTION: 'Tax code is deleting...',
					MESSAGE: 'Tax code has been deleted'
				},
				DELETE_TAXCODE_MULTY: {
					TITLE: 'Tax code Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Tax code?',
					WAIT_DESCRIPTION: 'Tax code are deleting...',
					MESSAGE: 'Selected Tax code have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Tax code',
					MESSAGE: 'Selected Tax code status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Tax code has been updated',
					ADD_MESSAGE: 'Tax code has been created'
				}
			},

			COMPANY: {
				COMPANY: 'Companys',
				COMPANY_LIST: 'Companys',
				NEW_COMPANY: 'New Company',
				DELETE_COMPANY_SIMPLE: {
					TITLE: 'Company Delete',
					DESCRIPTION: 'Are you sure to permanently delete this Company?',
					WAIT_DESCRIPTION: 'Company is deleting...',
					MESSAGE: 'Company has been deleted'
				},
				DELETE_COMPANY_MULTY: {
					TITLE: 'Company Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Designations?',
					WAIT_DESCRIPTION: 'Companys are deleting...',
					MESSAGE: 'Selected Companys have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Companys',
					MESSAGE: 'Selected Companys status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Company has been updated',
					ADD_MESSAGE: 'Company has been created'
				}
			},

			PROJECTCREATION: {
				PROJECTCREATION: 'Project Creation',
				PROJECTCREATION_LIST: 'Projects',
				NEW_PROJECTCREATION: 'New Projects',
				DELETE_PROJECTCREATION_SIMPLE: {
					TITLE: 'Company Delete',
					DESCRIPTION: 'Are you sure to permanently delete this Project?',
					WAIT_DESCRIPTION: 'Project is deleting...',
					MESSAGE: 'Project has been deleted'
				},
				DELETE_PROJECTCREATION_MULTY: {
					TITLE: 'Project Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Projectd?',
					WAIT_DESCRIPTION: 'Projects are deleting...',
					MESSAGE: 'Selected Projects have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Projects',
					MESSAGE: 'Selected Projects status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Project has been updated',
					ADD_MESSAGE: 'Project has been created'
				}
			},

			EMAIL: {
				EMAIL: 'Emails',
				EMAIL_LIST: 'Emails',
				NEW_EMAIL: 'New Email',
				DELETE_EMAIL_SIMPLE: {
					TITLE: 'Email Delete',
					DESCRIPTION: 'Are you sure to permanently delete this Email?',
					WAIT_DESCRIPTION: 'Email is deleting...',
					MESSAGE: 'Email has been deleted'
				},
				DELETE_EMAIL_MULTY: {
					TITLE: 'Email Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Emails?',
					WAIT_DESCRIPTION: 'Emails are deleting...',
					MESSAGE: 'Selected Emails have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Emails',
					MESSAGE: 'Selected Emails status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Email has been updated',
					ADD_MESSAGE: 'Email has been created'
				}
			},

			COMPANYPROFILE: {
				COMPANYPROFILE: 'Company Profile',
				COMPANYPROFILE_LIST: 'Company Profiles',
				NEW_COMPANYPROFILE: 'New Company Profile',
				DELETE_COMPANYPROFILE_SIMPLE: {
					TITLE: 'Company Profile Delete',
					DESCRIPTION: 'Are you sure to permanently delete this Company Profile?',
					WAIT_DESCRIPTION: 'Company Profile is deleting...',
					MESSAGE: 'Company Profile has been deleted'
				},
				DELETE_COMPANYPROFILE_MULTY: {
					TITLE: 'Company Profile Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Company Profile?',
					WAIT_DESCRIPTION: 'Company Profile are deleting...',
					MESSAGE: 'Selected Company Profile have been deleted',
					ERRMSGSINGLE: '{{msg}} Company Profile could not be deleted since it is in use.',
					ERRMSGMULTY: "Following Company Profile '{{msg}}' could not be deleted since they are in use."
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Profile Name',
					MESSAGE: 'Selected Profile Name status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Company Profile has been updated',
					ADD_MESSAGE: 'Company Profile has been created',
					DUPLICATE_MESSAGE: 'A Company Profile with same name already exists.'
				},
				ROLEPERMISSION: {
					ASSIGNPERMISSION: 'Selected Company Profile rights have successfully been updated.'
				}
			},

			PROJECTTEMPLATE: {
				PROJECTTEMPLATE: 'Project Template',
				PROJECTTEMPLATE_LIST: 'Project Templates',
				NEW_PROJECTTEMPLATE: 'New Project Template',
				DELETE_PROJECTTEMPLATE_SIMPLE: {
					TITLE: 'Project Template Delete',
					DESCRIPTION: 'Are you sure to permanently delete this Project Template?',
					WAIT_DESCRIPTION: 'Project Template is deleting...',
					MESSAGE: 'Project Template has been deleted'
				},
				DELETE_PROJECTTEMPLATE_MULTY: {
					TITLE: 'Project Template Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Project Templates?',
					WAIT_DESCRIPTION: 'Project Templates are deleting...',
					MESSAGE: 'Selected Project Templates have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Project Templates',
					MESSAGE: 'Selected Project Templates status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Project Template has been updated',
					ADD_MESSAGE: 'Project Template has been created'
				}
			},

			PROJECTGROUP: {
				PROJECTGROUP: 'Project group',
				PROJECTGROUP_LIST: 'Project group',
				NEW_PROJECTGROUP: 'New Project group',
				DELETE_PROJECTGROUP_SIMPLE: {
					TITLE: 'Project Group Delete',
					DESCRIPTION: 'Are you sure to permanently delete this project group?',
					WAIT_DESCRIPTION: 'Project group is deleting...',
					MESSAGE: 'Project group has been deleted'
				},
				DELETE_PROJECTGROUP_MULTY: {
					TITLE: 'Project Group Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected project group?',
					WAIT_DESCRIPTION: 'Project group are deleting...',
					MESSAGE: 'Selected Project group have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected project group',
					MESSAGE: 'Selected project group status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Project group has been updated',
					ADD_MESSAGE: 'Project group has been created'
				}
			},

			ONGOINGPROJECT: {
				ONGOINGPROJECT: ' Projects',
				ONGOINGPROJECT_LIST: ' Projects',
				NEW_ONGOINGPROJECT: 'New  Project',
				DELETE_ONGOINGPROJECT_SIMPLE: {
					TITLE: ' Project Delete',
					DESCRIPTION: 'Are you sure to permanently delete this  Project?',
					WAIT_DESCRIPTION: ' Project is deleting...',
					MESSAGE: ' Project has been deleted'
				},
				DELETE_ONGOINGPROJECT_MULTY: {
					TITLE: ' Projects Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected  Projects?',
					WAIT_DESCRIPTION: ' Projects are deleting...',
					MESSAGE: 'Selected  Projects have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected  Projects',
					MESSAGE: 'Selected  Projects status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: ' Project has been updated',
					ADD_MESSAGE: ' Project has been created'
				}
			},

			PROFILE: {
				PROFILE: ' Profiles',
				PROFILE_LIST: ' Profiles',
				NEW_PROFILE: 'New  Profile',
				DELETE_PROFILE_SIMPLE: {
					TITLE: ' Profile Delete',
					DESCRIPTION: 'Are you sure to permanently delete this  Profile?',
					WAIT_DESCRIPTION: ' Profile is deleting...',
					MESSAGE: ' Profile has been deleted'
				},
				DELETE_PROFILE_MULTY: {
					TITLE: ' Profile Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected  Profiles?',
					WAIT_DESCRIPTION: ' Profiles are deleting...',
					MESSAGE: 'Selected  Profiles have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected  Profiles',
					MESSAGE: 'Selected  Profiles status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: ' Profile has been updated',
					ADD_MESSAGE: ' Profile has been created'
				}
			},

			MATERIALUNIT: {
				MATERIALUNIT: 'Material Unit',
				MATERIALUNIT_LIST: 'Material Units',
				NEW_MATERIALUNIT: 'New Material Unit',
				DELETE_MATERIALUNIT_SIMPLE: {
					TITLE: 'Material Unit Delete',
					DESCRIPTION: 'Are you sure to permanently delete this Material Unit?',
					WAIT_DESCRIPTION: 'Material Unit is deleting...',
					MESSAGE: 'Material Unit has been deleted'
				},
				DELETE_MATERIALUNIT_MULTY: {
					TITLE: 'Material Units Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Material Units?',
					WAIT_DESCRIPTION: 'Material Units are deleting...',
					MESSAGE: 'Selected Material Units have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Material Unit',
					MESSAGE: 'Selected Material Unit status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Material Unit has been updated',
					ADD_MESSAGE: 'Material Units has been created'
				}
			},

			CLIENT: {
				CLIENT: 'Clients',
				CLIENT_LIST: 'Clients',
				NEW_CLIENT: 'New Client',
				DELETE_CLIENT_SIMPLE: {
					TITLE: 'Client Delete',
					DESCRIPTION: 'Are you sure to permanently delete this Client?',
					WAIT_DESCRIPTION: 'Client is deleting...',
					MESSAGE: 'Client has been deleted'
				},
				CLIENT_CLIENT_MULTY: {
					TITLE: 'Clients Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Clients?',
					WAIT_DESCRIPTION: 'Clients are deleting...',
					MESSAGE: 'Selected Clients have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Client',
					MESSAGE: 'Selected Client status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Client has been updated',
					ADD_MESSAGE: 'Client has been created'
				}
			},

			PRIORITY: {
				PRIORITY: 'Prioritys',
				PRIORITY_LIST: 'Prioritys',
				NEW_PRIORITY: 'New Priority',
				DELETE_PRIORITY_SIMPLE: {
					TITLE: 'Priority Delete',
					DESCRIPTION: 'Are you sure to permanently delete this Priority?',
					WAIT_DESCRIPTION: 'Priority is deleting...',
					MESSAGE: 'Priority has been deleted'
				},
				CLIENT_PRIORITY_MULTY: {
					TITLE: 'Prioritys Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Prioritys?',
					WAIT_DESCRIPTION: 'Prioritys are deleting...',
					MESSAGE: 'Selected Prioritys have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Priority',
					MESSAGE: 'Selected Priority status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Priority has been updated',
					ADD_MESSAGE: 'Priority has been created'
				}
			},

			WORKFLOW: {
				WORKFLOW: 'Workflow',
				WORKFLOW_LIST: 'Workflow',
				NEW_WORKFLOW: 'New Workflow',
				DELETE_WORKFLOW_SIMPLE: {
					TITLE: 'Workflow Step Delete',
					DESCRIPTION: 'Are you sure you want to permanently delete this Workflow Step?',
					WAIT_DESCRIPTION: 'Workflow Step is deleting...',
					MESSAGE: 'Workflow Step deleted successfully'
				},
				UPDATE_WORKFLOW: {
					TITLE: 'Update Workflow',
					MESSAGE: 'Workflow Step updated successfully',
					DUPLICATE_MESSAGE: 'Workflow Step contains duplicate data',
					ERROR_MESSAGE:'Error occurred'
				},
				UPDATE_WORKFLOW_DOCSTAGE: {
					TITLE: 'Update Workflow Docstage',
					MESSAGE: 'Workflow Step Docstage updated successfully'
				},
				ADD_WORKFLOW: {
					TITLE: 'Add Workflow Step',
					MESSAGE: 'Workflow Step added successfully'
				}

			},

			NORMSET: {
				NORMSET: 'Norm Set',
				NORMSET_LIST: 'Norm Set',
				NEW_NORMSET: 'New Norm Set',
				DELETE_NORMSET_SIMPLE: {
					TITLE: 'Norm Set Delete',
					DESCRIPTION: 'Are you sure to permanently delete this Norm Set?',
					WAIT_DESCRIPTION: 'Norm Set is deleting...',
					MESSAGE: 'Norm Set has been deleted'
				},
				DELETE_NORMSET_MULTY: {
					TITLE: 'Norm Set Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Norm Set?',
					WAIT_DESCRIPTION: 'Norm Set are deleting...',
					MESSAGE: 'Selected Norm Set have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Norm Set',
					MESSAGE: 'Selected Norm Set status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Norm Set has been updated',
					ADD_MESSAGE: 'Norm Set has been created'
				}
			},

			NORMTASKGROUP: {
				NORMTASKGROUP: 'Norm Taskgroup',
				NNORMTASKGROUP_LIST: 'Norm Taskgroup',
				NEW_NORMTASKGROUP: 'New Norm Taskgroup',
				DELETE_NORMTASKGROUP_SIMPLE: {
					TITLE: 'Norm Taskgroup Delete',
					DESCRIPTION: 'Are you sure to permanently delete this Norm Taskgroup?',
					WAIT_DESCRIPTION: 'Norm Taskgroup is deleting...',
					MESSAGE: 'Norm Taskgroup has been deleted'
				},
				DELETE_NORMTASKGROUP_MULTY: {
					TITLE: 'Norm Taskgroup Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected Norm Taskgroup?',
					WAIT_DESCRIPTION: 'Norm Taskgroup are deleting...',
					MESSAGE: 'Selected Norm Taskgroup have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected Norm Taskgroup',
					MESSAGE: 'Selected Norm Taskgroup status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Norm Taskgroup has been updated',
					ADD_MESSAGE: 'Norm Taskgroup has been created'
				}
			},

			ACTUALACTIVITY: {
				ACTUALACTIVITY: 'Actual Activity',
				ACTUALACTIVITY_LIST: 'Actual Activitys',
				NEW_ACTUALACTIVITY: 'New Actual Activity',
				DELETE_ACTUALACTIVITY_SIMPLE: {
					TITLE: 'Actual activity Delete',
					DESCRIPTION: 'Are you sure to permanently delete this actual activity?',
					WAIT_DESCRIPTION: 'Actual activity is deleting...',
					MESSAGE: 'Actual activity has been deleted'
				},
				DELETE_ACTUALACTIVITY_MULTY: {
					TITLE: 'Actual activity Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected actual activity?',
					WAIT_DESCRIPTION: 'Actual activity are deleting...',
					MESSAGE: 'Selected actual activity have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected actual activity',
					MESSAGE: 'Selected actual activity status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Actual activity has been updated',
					ADD_MESSAGE: 'Actual activity has been created'
				}
			},

			FILEDETAILS: {
				DELETE_FILE: {
					TITLE: 'Task File Delete',
					DESCRIPTION: 'Are you sure you want to permanently delete selected files?',
					WAIT_DESCRIPTION: 'Selected files are getting deleted...',
					MESSAGE: 'Workflow Step deleted successfully'
				},
				ADD_FILE: {
					TITLE: 'Add Workflow Step',
					MESSAGE: 'Task file uploaded successfully'
				}

			},
		}



	}
};
