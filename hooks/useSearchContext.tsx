// create a search context

import { createContext, useContext, useState } from 'react';

interface SearchTermCreateContext {
	searchTerm: string;
	handleSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchTermContext = createContext<SearchTermCreateContext | undefined>(undefined);

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const value = { searchTerm, handleSearchTermChange };

	return <SearchTermContext.Provider value={value}>{children}</SearchTermContext.Provider>;
};

const useSearch = (): SearchTermCreateContext => {
	const context = useContext(SearchTermContext);

	if (context === undefined) {
		throw new Error('useSearch must be used within SearchProvider');
	}

	return context;
};

export { SearchProvider, useSearch };
