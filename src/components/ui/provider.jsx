'use client';

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { ColorModeProvider } from './color-mode';

export function Provider(props) {
	const system = createSystem(defaultConfig, {
		initialColorMode: 'light',
		theme: {
			tokens: {
				fonts: {
					heading: { value: 'Poppins' },
					body: { value: 'Work Sans' },
				},
			},
		},
	});

	return (
		<ChakraProvider value={system}>
			<ColorModeProvider forcedTheme="light" {...props} />
		</ChakraProvider>
	);
}
