import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import './App.css';
import TitleWithLogo from './components/TitleWithLogo';
import Header from './components/Header';
import FloatingMenu from './components/FloatingMenu';

function App() {
	return (
		<Container paddingInline={{ base: '1rem', md: '1.8rem' }} paddingBlock={6}>
			<Header />
		</Container>
	);
}

export default App;
