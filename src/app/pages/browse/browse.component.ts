import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ResultsComponent } from './results/results.component';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
  imports: [SearchComponent, PaginationComponent, ResultsComponent],
})
export class BrowseComponent {
  page: number = 1;
}
