import { Badge } from '@chakra-ui/react';
import React from 'react';

const CustomBadge = ({ label, color }) => {
	return (
		<Badge
			bg={`${color}.100`}
			color={`${color}.700`}
			fontSize="sm"
			fontWeight="semibold"
			paddingBlock={1}
			paddingInline={4}
			border="1px solid"
			borderColor={`${color}.600`}
			borderRadius="full"
		>
			{label}
		</Badge>
	);
};

export default CustomBadge;
