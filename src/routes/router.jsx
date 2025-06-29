import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import { createBrowserRouter } from 'react-router';
import ProductDetail from '../components/ProductDetail';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
	},
	{ path: '/products/:id', element: <ProductDetail /> },
]);

export default router;
