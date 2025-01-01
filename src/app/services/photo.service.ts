import { IPaginatedDto } from './../models/paginated-dto.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  async getPhotos(searchTerm: string = ''): Promise<IPaginatedDto> {
    const response = await fetch(
      `http://localhost:5049/photos?page=1&per_page=5&query={${searchTerm}}`
    );

    if (response.ok) {
      return await response.json();
    }

    return {
      total: 0,
      totalPages: 0,
      results: [],
    };
  }
}
