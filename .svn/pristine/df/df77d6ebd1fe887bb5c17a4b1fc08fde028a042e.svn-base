import { Component, ViewChild, OnInit, Inject, AfterViewInit } from '@angular/core';
import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';
import { RoleService } from '../../../core/services/role.service';
import {LayoutUtilsService, MessageType} from '../../../core/utils/layout-utils.service';
import { RoleModel } from '../../../core/models/role.model';
import { TranslateService } from '@ngx-translate/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
	selector: 'm-role-Permission',
	templateUrl: './role-Permission.component.html',
	styleUrls: ['./role-Permission.component.scss'],
})

export class RolePermissonComponent implements AfterViewInit {


	source: any;
	treeData: any = [];
	rolesModel: RoleModel[] = [];
	roleRightsForm: FormGroup;
	dataAdapter: any;
	role: RoleModel;
	records: any;
	selectRoleId: number = 0;
	selectRoleName: string = "";
	loaderShow: boolean = false;
	loading: boolean = false;
	@ViewChild('myTree') myTree: jqxTreeComponent;
	constructor(private roleService: RoleService,
		private layoutUtilsService: LayoutUtilsService, private route: ActivatedRoute,
		private router: Router,private fb: FormBuilder,
		private translate: TranslateService,
		public toastr: ToastrManager,
		public loaders: LoadingBarService
	) { }

	ngOnInit(): void {
		debugger;
		this.loaderShow = true;
		this.loaders.start();
		this.selectRoleId = +this.route.snapshot.paramMap.get('id');
		this.createForm();
		this.LoadModuleTree();

	}

	LoadModuleTree() {
		this.roleService.getRoleAccessPermission(this.selectRoleId).subscribe(a => {
			debugger;
			   this.roleService.getAllRole()
				   .subscribe(resRoles => {
					   this.rolesModel = resRoles["data"];
					   var roleDatatdata = this.rolesModel.find(a => a.id == this.selectRoleId);
					   this.selectRoleName = roleDatatdata.roleName;
				   //get all parent hierarchi
				   this.loaders.complete();
				   this.loaderShow = false;
			   });
		   // prepare the data
		   let length = a.responseResultDto.data.length;//a.responseResult.list[0].length
		   let treeData = [];
		   let idIncrement = 10000;
		   for (let i = 0; i < length; i++) {
				   debugger;
			   //get all children
			   idIncrement++
			   if (a.responseResultDto.data.filter(function (obj) { return obj.parentid ==a.responseResultDto.data[i].id }).length <= 0) {

				   treeData.push(
					   {
						   id: idIncrement,
						   parentid: a.responseResultDto.data[i].id,
						   text: "Add",
						   checked: a.responseResultDto.data[i].addRight != null && a.responseResultDto.data[i].addRight > 0 ? true : false

					   })
				   idIncrement++
				   treeData.push(
					   {
						   id: idIncrement,
						   parentid: a.responseResultDto.data[i].id,
						   text: "Edit",
						   checked: a.responseResultDto.data[i].editRight != null && a.responseResultDto.data[i].editRight > 0 ? true : false
					   },
				   )
				   idIncrement++
				   treeData.push(
					   {
						   id: idIncrement,
						   parentid: a.responseResultDto.data[i].id,
						   text: "Delete",
						   checked: a.responseResultDto.data[i].deleteRight != null && a.responseResultDto.data[i].deleteRight > 0 ? true : false


					   }
				   )
				   idIncrement++
				   treeData.push(
					   {
						   id: idIncrement,
						   page: null,
						   parentid: a.responseResultDto.data[i].id,
						   text: "View",
						   checked: a.responseResultDto.data[i].viewRight != null && a.responseResultDto.data[i].viewRight > 0 ? true : false
					   }

				   )
			   }

		   }

		   this.treeData = a.responseResultDto.data.concat(treeData);
		   this.source = {
			   datatype: 'json',
			   datafields: [
				   { name: 'id' },
				   { name: 'parentid' },
				   { name: 'text' },
				   { name: 'value' },
				   { name: 'checked' }
			   ],
			   id: 'id',
			   localdata: this.treeData
		   };
		   this.dataAdapter = new jqx.dataAdapter(this.source, { autoBind: true });
		   // get the tree items. The first parameter is the item's id. The second parameter is the parent item's id. The 'items' parameter represents
		   // the sub items collection name. Each jqxTree item has a 'label' property, but in the JSON data, we have a 'text' field. The last parameter
		   // specifies the mapping between the 'text' and 'label' fields.
		   this.records = this.dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }]);
	   }
	   );
	}

	createForm() {
		debugger;
		this.roleRightsForm = this.fb.group({
			RoleId: [this.selectRoleId, Validators.required]
		});
	}

	selectProject(eve: any) {
		debugger;
		var roleDatatdata = this.rolesModel.find(a => a.id == eve.value);
		this.selectRoleId = roleDatatdata.id;
		this.selectRoleName = roleDatatdata.roleName;
		this.LoadModuleTree();
		debugger;
	}

	myCheckBoxOnChange(event: any): void {
		let checked = event.args.checked;
		this.myTree.hasThreeStates(checked);
	};

	getTitle(): string {
		return `Select Modules to give access permission to role '${this.selectRoleName}'`;
		//return 'Select Modules to give access permission to role '${this.selectRoleName}'';
	}
	myTreeOnInitialized(): void {

		this.myTree.expandAll();
		this.myTree.selectItem(document.getElementById('home'));
		let solutionsItem = document.getElementById('solutions');
		this.myTree.expandItem(solutionsItem);
		this.myTree.checkItem(solutionsItem, true);
		this.myTree.uncheckItem(document.getElementById('manufacturing'));
	}

	ngAfterViewInit(): void {
		this.myTree.expandAll();
	}
	onBack()
	{
		debugger;
		this.router.navigate(['/roles/rolelist']);
	}
	onSubmit() {
		this.loading = true;
		debugger;
		let items = this.myTree.getCheckedItems();
		var selectedModules = items.filter(function (obj) { return obj["id"] >= 1000 });
		var x = selectedModules.map(a => a["parentId"])
		var flags = [], listSelectedParentIDs = [], l = x.length, i;
		for (i = 0; i < l; i++) {
			if (flags[x[i]]) continue;
			flags[x[i]] = true;
			listSelectedParentIDs.push(x[i]);
		}
		var returnData = [];
		for (let i = 0; i < listSelectedParentIDs.length; i++) {
		//	let leafNodes = this.treeData.filter(function (obj) { return obj.parentid == listSelectedParentIDs[i] })
			let ogleafNodes = items.filter(function (obj) { return obj["parentId"] == listSelectedParentIDs[i] })
			let parentNode = this.treeData.filter(function (obj) { return obj.id == listSelectedParentIDs[i] })
			if (parentNode != undefined) {

				if (ogleafNodes.filter(function (obj) { return obj.label == "Add" }).length > 0) {
					parentNode[0].AddRight = 1;
					parentNode[0].ViewRight = 1;
				}
				else {
					parentNode[0].AddRight = 0;
				}
				if (ogleafNodes.filter(function (obj) { return obj.label == "Edit" }).length > 0) {
					parentNode[0].EditRight = 1;
					parentNode[0].ViewRight = 1;
				}
				else {
					parentNode[0].EditRight = 0;
				}
				if (ogleafNodes.filter(function (obj) { return obj.label == "Delete" }).length > 0) {
					parentNode[0].DeleteRight = 1;
					parentNode[0].ViewRight = 1;
				}
				else {
					parentNode[0].DeleteRight = 0;
				}

				if (ogleafNodes.filter(function (obj) { return obj.label == "View" }).length > 0) {
					parentNode[0].ViewRight = 1;
				}
				else {
					if (parentNode[0].DeleteRight > 0 || parentNode[0].EditRight > 0 || parentNode[0].AddRightk > 0)
						parentNode[0].ViewRight = 1;
					else
						parentNode[0].ViewRight = 0;
				}
				returnData.push(parentNode[0]);
				let treeNode = this.treeData.filter(function (obj) { return obj.id == parentNode[0].parentid });
				while (treeNode) {
					if (treeNode.length > 0) {
						if (returnData.filter(function (obj) { return obj.id == treeNode[0].id }).length <= 0) {
							treeNode[0].ViewRight = 1;
							returnData.push(treeNode[0]);
						}
						treeNode = this.treeData.filter(function (obj) { return obj.id == treeNode[0].parentid });
						if (treeNode.length <= 0) {
							break;
						}
					}
					else
						break;
				}
			}
		}
		debugger;
		this.roleService.updateRoleRights(returnData, this.selectRoleId).subscribe(a => {
			this.loading = false;
			if (a != undefined) {
				if (a.responseResultDto.messageType== "S") {
						this.toastr.successToastr(this.translate.instant("COMMON_MGS.UPDATED.UPDATE_MGS"));
				}
				else if (a.responseResultDto.messageType == "E") {
					this.toastr.errorToastr(this.translate.instant("COMMON_MGS.ERROR.ERROR_MGS"));
				}
			}

		})
	}




}
