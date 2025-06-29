import { Input, InputGroup } from '@chakra-ui/react';
import React from 'react';
import { TbSearch } from 'react-icons/tb';

const SearchInput = ({ value, onChange, placeholder, name }) => {
	return (
		<InputGroup
			bg="gray.50"
			startElement={<TbSearch size={30} className="text-gray-400!" />}
			padding={3}
			borderRadius="full"
		>
			<Input
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				marginLeft={5}
				border="none"
				fontSize="lg"
				_focusVisible={{ outline: 'none' }}
				autoComplete="off"
			/>
		</InputGroup>
	);
};

export default SearchInput;
