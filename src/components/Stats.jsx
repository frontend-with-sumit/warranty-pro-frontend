import {
	Box,
	Grid,
	GridItem,
	Heading,
	HStack,
	Text,
	VStack,
} from '@chakra-ui/react';
import {
	LuCircleCheckBig,
	LuClock4,
	LuShield,
	LuTriangleAlert,
} from 'react-icons/lu';

const RenderStat = ({ label, value, color = 'blue', icon }) => {
	return (
		<HStack
			justifyContent="space-between"
			bgGradient="to-br"
			gradientFrom={`${color}.50`}
			gradientTo={`${color}.100`}
			spaceX={20}
			border="1px solid"
			borderColor={`${color}.200`}
			borderRadius="2xl"
			paddingInline={6}
			paddingBlock={4}
			className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
		>
			<VStack alignItems="start" spaceY={-4}>
				<Heading as="h5" fontSize="md" color={`${color}.600`}>
					{label}
				</Heading>
				<Text fontSize="4xl" fontWeight="bold" color={`${color}.700`}>
					{value}
				</Text>
			</VStack>
			<Box
				bg={`${color}.500`}
				padding={3}
				borderRadius="2xl"
				className="shadow-lg!"
			>
				{icon}
			</Box>
		</HStack>
	);
};

const Stats = () => {
	const STATS = [
		{
			id: 1,
			label: 'Total Products',
			value: 0,
			color: 'blue',
			icon: <LuShield color="white" size={30} />,
		},
		{
			id: 2,
			label: 'Active Warranties',
			value: 0,
			color: 'green',
			icon: <LuCircleCheckBig color="white" size={30} />,
		},
		{
			id: 3,
			label: 'Expiring Soon',
			value: 0,
			color: 'yellow',
			icon: <LuClock4 color="white" size={30} />,
		},
		{
			id: 4,
			label: 'Expired',
			value: 0,
			color: 'red',
			icon: <LuTriangleAlert color="white" size={30} />,
		},
	];
	return (
		<Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6}>
			{STATS.map((stat) => (
				<GridItem key={stat.id}>
					<RenderStat key={stat.label} {...stat} />
				</GridItem>
			))}
		</Grid>
	);
};

export default Stats;
