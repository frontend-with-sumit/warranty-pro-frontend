import { Container } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header';
import SearchProducts from './components/SearchProducts';

function App() {
	return (
		<Container
			paddingInline={{ base: '1rem', md: '1.8rem' }}
			paddingBlock={6}
			spaceY={10}
		>
			<Header />
			<SearchProducts />
		</Container>
	);
}

export default App;
