import { PaginationResultInterface } from './pagination.results.interface';

export class Pagination<PaginationEntity> {
  public results: PaginationEntity[];
  public page_total: number;
  public total: number;
  public total_pages: number;
  public actual_page: number;
  public page_previos: number;
  public page_next: number;
  
  constructor(paginationResults: PaginationResultInterface<PaginationEntity>,limit:number,actualpage:number) {
   let page_actual = actualpage;
    if ( actualpage > Math.ceil( paginationResults.total / limit)) {
       page_actual =  Math.ceil( paginationResults.total / limit);
    }
   if ( actualpage < 0) {
        page_actual = 0;
    }

    this.results = paginationResults.results;
    this.page_total = paginationResults.results.length;
    this.total = paginationResults.total;
    this.total_pages =  Math.ceil( paginationResults.total / limit); 
    this.actual_page =  page_actual; 
    this.page_previos =  page_actual <= 0 ? 0 : page_actual  -1 ; 
    this.page_next =    page_actual >= this.total_pages  ? page_actual : page_actual  + 1 ; 
  }
}