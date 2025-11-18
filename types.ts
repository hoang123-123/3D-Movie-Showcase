
export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  description: string;
  rating: number;
  genres: string[];
  duration: string;
  releaseYear: number;
}

export type SortOption = 'rating' | 'releaseYear' | 'title';
