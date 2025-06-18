import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import { BsLightningCharge } from 'react-icons/bs';
import { PiShieldStarBold } from 'react-icons/pi';

const TitleWithLogo = () => {
	return (
		<HStack spaceX={5} justifyContent="center">
			<Box border="1px solid" borderRadius="xl" width="fit-content" padding={3}>
				<PiShieldStarBold size={40} />
			</Box>
			<Box textAlign="center">
				<Heading as="h1" fontSize="4xl" fontWeight="bold">
					WarrantyPro
				</Heading>
				<HStack marginTop={2}>
					<BsLightningCharge />
					<Heading as="h6" fontSize="md">
						Smart Warranty Management
					</Heading>
				</HStack>
			</Box>
		</HStack>
	);
};

export default TitleWithLogo;
