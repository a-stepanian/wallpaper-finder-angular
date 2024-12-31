import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
  imports: [SearchComponent, ResultsComponent],
})
export class BrowseComponent {
  title = 'Wallpaper Finder | Browse Wallpapers';
}
