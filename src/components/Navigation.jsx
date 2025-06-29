import { Avatar, Box, Circle, Float, HStack } from '@chakra-ui/react';
import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import avatar from '../assets/images/avatar.jpg';

const Navigation = () => {
	return (
		<HStack as="nav" spaceX={5} alignItems="center">
			<Box
				_hover={{ background: 'gray.100' }}
				transition="background 0.2s ease-in"
				padding={2}
				borderRadius="full"
				cursor="pointer"
				position="relative"
			>
				<IoMdNotificationsOutline size={25} />
				<Float placement="top-end" offsetX="1" offsetY="1">
					<Circle
						bg="orange.500"
						size="10px"
						outline="0.2em solid"
						outlineColor="bg"
					/>
				</Float>
			</Box>
			<Avatar.Root size="xl" cursor="pointer">
				<Avatar.Fallback name="Sumit Kumar" />
				<Avatar.Image src={avatar} />
			</Avatar.Root>
		</HStack>
	);
};

export default Navigation;
