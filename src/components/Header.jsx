import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import TitleWithLogo from './TitleWithLogo';
import Logo from './shared/Logo';

const Header = () => {
	return (
		<VStack as="header" textAlign="center">
			<HStack spaceX={-2} justifyContent="center">
				<Heading as="h1" size="4xl" fontWeight="medium">
					Welcome to
				</Heading>
				<Logo showIcon={false} size="4xl" />
			</HStack>
			<Text fontWeight="medium" fontSize="xl" width="50ch">
				The complete warranty management solution. Track, protect, and maximize
				your product investments.
			</Text>
		</VStack>
	);
};

export default Header;
