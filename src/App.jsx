import { Container, Heading, Text, VStack } from '@chakra-ui/react';
import './App.css';
import TitleWithLogo from './components/TitleWithLogo';

function App() {
	return (
		<Container paddingInline={{ base: '1rem', md: '1.8rem' }} paddingBlock={6}>
			<VStack>
				<TitleWithLogo />
				<Text
					fontWeight="medium"
					fontSize="lg"
					marginTop={5}
					width="40rem"
					textAlign="center"
				>
					The complete warranty management platform. Track, protect, and
					maximize your product investments.
				</Text>
			</VStack>
			<Heading as="h1" fontWeight={900}>
				Warranty Pro
			</Heading>
			<Text>This is a test for warranty pro font</Text>
		</Container>
	);
}

export default App;
