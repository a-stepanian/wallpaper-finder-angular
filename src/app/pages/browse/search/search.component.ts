import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { PhotoService } from '../../../services/photo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  imports: [ReactiveFormsModule],
})
export class SearchComponent {
  photoService = inject(PhotoService);
  searchForm = new FormGroup({
    searchTerm: new FormControl(''),
  });
  results: any[] = [];

  async handleSubmit() {
    const response = await this.photoService.getPhotos(
      this.searchForm.value.searchTerm ?? ''
    );
    if (response) {
      this.results = response.results;
      console.log(response.results);
    }
  }
}
