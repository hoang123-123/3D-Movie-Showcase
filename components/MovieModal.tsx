
import React from 'react';
import { Movie } from '../types';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose, isFavorite, onToggleFavorite }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full relative transform transition-all duration-300 scale-95"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white z-20"
          aria-label="Close movie details"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="md:flex">
          <div className="md:w-1/3">
            <img src={movie.posterUrl} alt={movie.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-6 md:p-8 md:w-2/3 flex flex-col">
            <div className="flex justify-between items-start mb-2">
                <h2 className="text-3xl font-bold text-white pr-4">{movie.title}</h2>
                <button
                    onClick={onToggleFavorite}
                    className={`p-2 -mr-2 -mt-1 rounded-full transition-colors duration-300 ${isFavorite ? 'text-pink-500' : 'text-slate-400 hover:text-pink-500'}`}
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill={isFavorite ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>
            <div className="flex items-center space-x-4 text-slate-400 mb-4">
              <span>{movie.releaseYear}</span>
              <span>&bull;</span>
              <span>{movie.duration}</span>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white font-bold">{movie.rating}</span>
                <span className="text-sm">/5</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres.map(genre => (
                <span key={genre} className="bg-slate-700 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">{genre}</span>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed flex-grow">{movie.description}</p>
             <div className="mt-8">
                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Watch Now
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
