import { IPhoto } from './photo.model';

export interface IPaginatedDto {
  total: number;
  totalPages: number;
  results: IPhoto[];
}
