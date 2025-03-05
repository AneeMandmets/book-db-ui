export interface Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  publishedYear?: number;
  genres: string[];
  description?: string;
  coverImage?: string;
} 