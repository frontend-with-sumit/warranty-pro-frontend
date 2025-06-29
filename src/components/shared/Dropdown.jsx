import { Box, HStack, Portal, Select } from '@chakra-ui/react';
import React from 'react';

const Dropdown = ({ items, placeholder, value, onSelect }) => {
	return (
		<HStack bg="gray.50" borderRadius="full">
			<Select.Root
				collection={items}
				size="lg"
				width="250px"
				value={value}
				onValueChange={(e) => onSelect(e.value)}
			>
				<Select.HiddenSelect />
				<Select.Control>
					<Select.Trigger border="none">
						<Select.ValueText placeholder={placeholder} />
					</Select.Trigger>
					<Select.IndicatorGroup>
						<Select.ClearTrigger />
						<Select.Indicator />
					</Select.IndicatorGroup>
				</Select.Control>
				<Portal>
					<Select.Positioner>
						<Select.Content borderRadius="xl" className="shadow-md!">
							{items.items.map((item) => (
								<Select.Item item={item} key={item.value}>
									{item.label}
									<Select.ItemIndicator />
								</Select.Item>
							))}
						</Select.Content>
					</Select.Positioner>
				</Portal>
			</Select.Root>
		</HStack>
	);
};

export default Dropdown;
