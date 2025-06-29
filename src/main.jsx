import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/500.css';
import '@fontsource/work-sans/600.css';
import '@fontsource/work-sans/700.css';
import '@fontsource/work-sans/800.css';
import '@fontsource/work-sans/900.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Provider } from './components/ui/provider';
import './index.css';
import router from './routes/router';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
