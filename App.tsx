
import React, { useState, useMemo, useEffect } from 'react';
import { Movie, SortOption } from './types';
import { useMovies } from './hooks/useMovies';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import MovieModal from './components/MovieModal';

const App: React.FC = () => {
  const movies = useMovies();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('movie-favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Failed to parse favorites from localStorage', error);
      return [];
    }
  });
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>('rating');

  useEffect(() => {
    localStorage.setItem('movie-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (movieId: number) => {
    setFavorites(prev =>
      prev.includes(movieId)
        ? prev.filter(id => id !== movieId)
        : [...prev, movieId]
    );
  };

  const filteredAndSortedMovies = useMemo(() => {
    let moviesToShow = movies;

    if (showFavorites) {
      moviesToShow = movies.filter(movie => favorites.includes(movie.id));
    }

    if (searchQuery) {
       moviesToShow = moviesToShow.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return [...moviesToShow].sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'releaseYear':
          return b.releaseYear - a.releaseYear;
        case 'rating':
        default:
          return b.rating - a.rating;
      }
    });
  }, [movies, searchQuery, favorites, showFavorites, sortBy]);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        showFavorites={showFavorites}
        onShowFavoritesToggle={() => setShowFavorites(prev => !prev)}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <main className="container mx-auto px-4 py-8 pt-24">
        {showFavorites && filteredAndSortedMovies.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-slate-300">No Favorites Yet</h2>
            <p className="text-slate-400 mt-2">Click the heart icon on a movie's detail page to add it to your list.</p>
          </div>
        )}
        <MovieGrid movies={filteredAndSortedMovies} onMovieClick={handleMovieClick} />
      </main>
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={handleCloseModal}
          isFavorite={favorites.includes(selectedMovie.id)}
          onToggleFavorite={() => handleToggleFavorite(selectedMovie.id)}
        />
      )}
    </div>
  );
};

export default App;