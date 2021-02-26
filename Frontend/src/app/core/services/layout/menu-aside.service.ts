import { Observable, BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MenuConfigService } from '../menu-config.service';
import { ClassInitService } from '../class-init.service';
import * as objectPath from 'object-path';
import { LoadingBarService } from '@ngx-loading-bar/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { acceptType } from 'angular-file/file-upload/fileTools';
import { AccountService } from '../../auth/account.service';
@Injectable()
export class MenuAsideService {

	classes: string;
	private baseApiUrl: string = '/api/RoleRights/GetMenuList';
	menuListloader$: Observable<boolean> = of(true);
	menuList$: BehaviorSubject<any[]> = new BehaviorSubject([]);
	public config: any = {};
	constructor(private http: HttpClient,
		private menuConfigService: MenuConfigService,
		public loaders: LoadingBarService,
		private classInitService: ClassInitService,
		private accountService:AccountService
	) {

		this.config = {
			header: {},
			aside: {
				self: {},
				items: []
			}
		}
		// get menu list
		loaders.start();

		if (this.accountService.checkLoginStatus()) {
			this.http.get<any>(this.baseApiUrl).subscribe(a => {
				this.config = {
					header: {},
					aside: {
						self: {},
						items: this.unflatten(a)
					}
				}

				setTimeout(() =>
					this.menuList$.next(objectPath.get(this.config, 'aside.items'))
				);
				this.menuListloader$ = of(false);
				loaders.complete();
			})
		}
		else
		{
			this.accountService.logout();

			}

	}



	unflatten(arr) {
		debugger;
		var tree = [],
			mappedArr = {},
			arrElem,
			mappedElem;

		// First map the nodes of the array to an object -> create a hash table.
		for (var i = 0, len = arr.length; i < len; i++) {
			arrElem = arr[i];
			mappedArr[arrElem.moduleID] = arrElem;
			mappedArr[arrElem.moduleID]['submenu'] = [];
		}

		for (var id in mappedArr) {
			if (mappedArr.hasOwnProperty(id)) {
				mappedElem = mappedArr[id];
				// If the element is not at the root level, add it to its parent array of children.


				if (mappedElem.parentModuleID) {
					mappedArr[mappedElem['parentModuleID']]['submenu'].push(mappedElem);
				}
				// If the element is at the root level, add it to first level elements array.
				else {

					mappedElem["root"] = true;
					tree.push(mappedElem);

				}
			}
		}
		console.log("menutree",tree)
		return tree;
	}

}
