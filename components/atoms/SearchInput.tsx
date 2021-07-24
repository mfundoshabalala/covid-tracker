import { useSearch } from 'hooks/useSearchContext';

const SearchInput: React.FC = () => {
	const { handleSearchTermChange } = useSearch();

	return (
		<form>
			<input
				type="search"
				name="search"
				id="search"
				className="max-w-md pl-12 mx-auto text-gray-300 placeholder-gray-400 rounded bg-blueGray-700 min-w-max"
				placeholder="Search for a country"
				onChange={handleSearchTermChange}
			/>
		</form>
	);
};

export default SearchInput;
