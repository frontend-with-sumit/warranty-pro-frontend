import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import MainLayout from '../layouts/MainLayout';
import React from 'react';
import Logo from '../components/shared/Logo';
import Stats from '../components/Stats';
import Header from '../components/Header';
import { LuPlus } from 'react-icons/lu';

const Dashboard = () => {
	return (
		<MainLayout>
			<VStack marginBlock={10}>
				<Header />
				<Stats />
			</VStack>
		</MainLayout>
	);
};

export default Dashboard;
