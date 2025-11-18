
import React from 'react';
import { SortOption } from '../types';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  showFavorites: boolean;
  onShowFavoritesToggle: () => void;
  sortBy: SortOption;
  onSortChange: (option: SortOption) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange, showFavorites, onShowFavoritesToggle, sortBy, onSortChange }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
            <h1 className="text-2xl font-bold text-white tracking-wider">
              <span className="text-cyan-400">3D</span>Movie<span className="text-pink-500">Verse</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-32 sm:w-48 md:w-64 bg-slate-800 text-white placeholder-slate-400 border border-slate-700 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
              </div>
            </div>
             <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as SortOption)}
                className="appearance-none w-full bg-slate-800 text-white border border-slate-700 rounded-full py-2 pl-4 pr-8 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 cursor-pointer text-sm sm:text-base"
                aria-label="Sort movies by"
              >
                <option value="rating">Rating (High-Low)</option>
                <option value="releaseYear">Newest First</option>
                <option value="title">Title (A-Z)</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
            <button
              onClick={onShowFavoritesToggle}
              className={`p-2 rounded-full transition-colors duration-300 ${showFavorites ? 'bg-pink-500/20 text-pink-500' : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'}`}
              aria-label="Show favorite movies"
              title="Show Favorites"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={showFavorites ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;