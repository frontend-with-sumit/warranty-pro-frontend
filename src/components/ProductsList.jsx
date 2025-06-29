import { Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { differenceInCalendarDays } from 'date-fns';
import CustomBadge from './shared/CustomBadge';

const RenderProduct = ({ productName, brand, purchaseDate, expiresIn }) => {
	const getStatusBadge = (status) => {
		switch (status) {
			case 'active':
				return <CustomBadge label="Active" color="green" />;
			case 'expiring':
				return <CustomBadge label="Expiring soon" color="yellow" />;
			case 'expired':
				return <CustomBadge label="Expired" color="red" />;
			default:
				return <CustomBadge label="Unknown" color="gray" />;
		}
	};

	const getRemainingDays = (expiresIn) => {
		const today = new Date();
		const daysLeft = differenceInCalendarDays(expiresIn, today);

		if (daysLeft === 0) return 'Expires Today';

		if (daysLeft > 0) return `${daysLeft} day(s) left`;
		else return `Expired ${Math.abs(daysLeft) + ' day(s)'} ago`;
	};

	return (
		<HStack
			width="full"
			justifyContent="space-between"
			alignItems="center"
			padding={4}
			borderRadius="lg"
			className="bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-md"
		>
			<VStack alignItems="start" spaceY={-2}>
				<Heading as="h5" fontSize="lg" fontWeight="semibold" color="gray.900">
					{productName}
				</Heading>
				<Text fontSize="sm" color="gray.600">
					{brand}
				</Text>
				<Text fontSize="sm" color="gray.500">
					<span className="font-semibold">Purchased: </span> {purchaseDate}
				</Text>
			</VStack>
			<VStack alignItems="end" spaceY={0}>
				{getStatusBadge('active')}
				<Text fontSize="sm" fontWeight="semibold" color="gray.600">
					{getRemainingDays(expiresIn)}
				</Text>
			</VStack>
		</HStack>
	);
};
const ProductsList = () => {
	return (
		<VStack
			width="full"
			alignItems="start"
			border="1px solid"
			borderColor="gray.200"
			padding={6}
			borderRadius="lg"
			className="shadow-xl bg-white/80! backdrop-blur-md!"
			spaceY={2}
		>
			<Heading as="h3" fontSize="2xl" fontWeight="semibold" color="gray.900">
				Recent Products
			</Heading>
			<VStack width="full" spaceY={2}>
				<RenderProduct />
			</VStack>
		</VStack>
	);
};

export default ProductsList;
