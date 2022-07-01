export interface Book {
  id?: number;
  title: string;
  synopsis: string;
  cover: string;
  autor: string;
  category?: string;
  editorial?: string;
  created_at?: Date;
}
