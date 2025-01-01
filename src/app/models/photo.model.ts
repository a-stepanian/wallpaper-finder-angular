export interface IPhoto {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: false;
  description: string;
  user: any;
  current_user_collections: any;
  urls: any;
  links: any;
}
