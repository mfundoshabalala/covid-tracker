import { useSearch } from 'hooks/useSearchContext';

const SearchInput: React.FC = () => {
	const { handleSearchTermChange } = useSearch();

	return (
		<form>
			<input
				type="search"
				name="search"
				id="search"
				className="w-full pl-12 mx-auto text-gray-300 placeholder-gray-400 rounded sm:w-96 bg-blueGray-700"
				placeholder="Search for a country"
				onChange={handleSearchTermChange}
			/>
		</form>
	);
};

export default SearchInput;
