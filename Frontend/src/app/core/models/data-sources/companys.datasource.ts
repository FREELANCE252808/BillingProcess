import { Observable, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { CompanysService } from '../../services/companys.service';
import { QueryParamsModel } from '../query-models/query-params.model';
import { BaseDataSource } from './_base.datasource';
import { QueryResultsModel } from '../query-models/query-results.model';

export class CompanysDataSource extends BaseDataSource {
	constructor(private companysService: CompanysService) {
		super();
	}

	loadCompanys(
		queryParams: QueryParamsModel
	) {
		this.loadingSubject.next(true);
		this.companysService.findCompanys(queryParams).pipe(
			tap(res => {
				// Comment this when you start work with real server
				// This code imitates server calls
				// START
				const result = this.baseFilter(res.items, queryParams, ['status', 'type']);
				this.entitySubject.next(result.items);
				this.paginatorTotalSubject.next(result.totalCount);
				// END

				// Uncomment this when you start work with real server
				// START
				// this.entitySubject.next(res.items);
				// this.paginatorTotalSubject.next(res.totalCount);
				// END
			}),
			catchError(err => of(new QueryResultsModel([], err))),
			finalize(() => this.loadingSubject.next(false))
		).subscribe();
	}
}
