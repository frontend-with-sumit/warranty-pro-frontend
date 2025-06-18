import { createListCollection, HStack, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { CATEGORY, STATUS } from '../utils/filters';
import SearchInput from './SearchInput';
import Dropdown from './shared/Dropdown';

const CATEGORIES = createListCollection({
	items: CATEGORY,
});

const STATUSES = createListCollection({
	items: STATUS,
});

const SearchProducts = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [filters, setFilters] = useState({
		category: '',
		status: '',
	});

	const handleChange = (evt) => setSearchTerm(evt.target.value);

	const updateFilters = (type, val) =>
		setFilters((prev) => ({ ...prev, [type]: val }));

	return (
		<VStack
			alignItems="initial"
			spaceY={2}
			padding={6}
			borderRadius="4xl"
			border="1px solid"
			borderColor="gray.200"
			className="shadow-sm!"
		>
			<SearchInput
				value={searchTerm}
				placeholder="Search your products"
				name="search"
				onChange={handleChange}
			/>
			<HStack>
				<Dropdown
					placeholder="All Categories"
					items={CATEGORIES}
					value={filters.category}
					onSelect={(val) => updateFilters('category', val)}
				/>
				<Dropdown
					placeholder="All Status"
					items={STATUSES}
					value={filters.status}
					onSelect={(val) => updateFilters('status', val)}
				/>
			</HStack>
		</VStack>
	);
};

export default SearchProducts;
