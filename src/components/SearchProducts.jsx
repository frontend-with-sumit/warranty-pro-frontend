import {
	createListCollection,
	HStack,
	Input,
	InputGroup,
	VStack,
} from '@chakra-ui/react';
import { TbSearch } from 'react-icons/tb';
import Dropdown from './shared/Dropdown';
import { CATEGORY, STATUS } from '../utils/filters';
import { useState } from 'react';

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
			className="shadow-sm!"
			padding={6}
			borderRadius="4xl"
			border="1px solid"
			borderColor="gray.200"
		>
			<InputGroup
				bg="gray.50"
				startElement={<TbSearch size={30} className="text-gray-400!" />}
				padding={3}
				borderRadius="full"
			>
				<Input
					name="search"
					marginLeft={5}
					border="none"
					placeholder="Search your produicts"
					fontSize="lg"
					_focusVisible={{ outline: 'none' }}
					autoComplete="off"
					value={searchTerm}
					onChange={handleChange}
				/>
			</InputGroup>
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
