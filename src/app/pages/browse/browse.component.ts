import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ResultsComponent } from './results/results.component';
import { IPaginatedDto } from '../../models/paginated-dto.model';
import { IPhoto } from '../../models/photo.model';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
  imports: [SearchComponent, PaginationComponent, ResultsComponent],
})
export class BrowseComponent {
  page: number = 1;
  total: number = 0;
  results: IPhoto[] = [];

  updateSearchResults(dto: IPaginatedDto) {
    this.total = dto.totalPages;
    this.results = dto.results;
    console.log('browse response: ', dto);
  }
}
