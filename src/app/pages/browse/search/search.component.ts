import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { PhotoService } from '../../../services/photo.service';
import { IPaginatedDto } from '../../../models/paginated-dto.model';

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
  @Output() newSearchEvent = new EventEmitter<IPaginatedDto>();

  async handleSubmit() {
    const response = await this.photoService.getPhotos(
      this.searchForm.value.searchTerm ?? ''
    );
    if (response) {
      this.newSearchEvent.emit(response);
    }
  }
}
