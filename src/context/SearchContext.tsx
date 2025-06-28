// src/context/SearchContext.tsx

'use client';

import { createContext, useState, ReactNode, useContext, Dispatch, SetStateAction } from 'react';

// Define the shape of our search context's value
type SearchContextType = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};

// Create the context with a default value
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Create the Provider component
export function SearchProvider({ children }: { children: ReactNode }) {
  // This state will hold the user's search text
  const [searchQuery, setSearchQuery] = useState('');

  const value = {
    searchQuery,
    setSearchQuery,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

// Create a custom hook for easy access to the context
export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}