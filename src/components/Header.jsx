import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import TitleWithLogo from './TitleWithLogo';

const Header = () => {
	return (
		<Box as="header">
			<VStack spaceY={5}>
				<TitleWithLogo />
				<Text
					fontWeight="medium"
					fontSize="lg"
					width="40rem"
					textAlign="center"
				>
					The complete warranty management platform. Track, protect, and
					maximize your product investments.
				</Text>
			</VStack>
		</Box>
	);
};

export default Header;
