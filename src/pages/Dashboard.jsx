import { Button, HStack, VStack } from '@chakra-ui/react';
import { PiPlusBold } from 'react-icons/pi';
import Header from '../components/Header';
import Stats from '../components/Stats';
import MainLayout from '../layouts/MainLayout';
import { BsBoxes } from 'react-icons/bs';
import ProductsList from '../components/ProductsList';

const Dashboard = () => {
	return (
		<MainLayout>
			<VStack marginBlock={10} spaceY={10}>
				<Header />
				<Stats />
				<VStack width="full" spaceY={3}>
					<HStack>
						<Button
							bg="blue.600"
							borderRadius="lg"
							fontSize="md"
							fontWeight="bold"
							className="hover:shadow-xl transition-all duration-300"
						>
							<PiPlusBold size={20} color="white" /> Add New Product
						</Button>
						<Button
							borderRadius="lg"
							fontSize="md"
							fontWeight="medium"
							variant="outline"
						>
							<BsBoxes size={20} /> View All Products
						</Button>
					</HStack>
					<ProductsList />
				</VStack>
			</VStack>
		</MainLayout>
	);
};

export default Dashboard;
