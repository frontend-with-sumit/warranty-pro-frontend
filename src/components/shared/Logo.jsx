import { Flex, Text } from '@chakra-ui/react';
import { PiShieldStarBold } from 'react-icons/pi';

const Logo = ({ showIcon = true, size = '2xl' }) => {
	return (
		<Flex alignItems="center">
			{showIcon && <PiShieldStarBold size={40} className="text-blue-700" />}
			<Text
				className="ml-2! font-bold! text-gray-900!"
				fontSize={size || '2xl'}
			>
				Warranty
				<span className="bg-gradient-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text">
					PRO
				</span>
			</Text>
		</Flex>
	);
};

export default Logo;
