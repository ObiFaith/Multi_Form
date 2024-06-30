import React from 'react';
import ReactDOM from 'react-dom/client';
import { DashboardLayout, NotFound, Root } from './layouts';
import {
	Navigate,
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import './index.css';
import { Customers, Home } from '.';
import { AuthProvider, useAuth } from './contexts/auth';

const PrivateRoute = ({component: Component}) => <Component />/* {
	const {user} = useAuth()
	return user ? <Component /> : <Navigate to='/' />
} */

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<NotFound />}>
			<Route index element={<Home />} />
			<Route path="/dashboard" element={<PrivateRoute component={DashboardLayout} />}>
				<Route index element={<Customers />} />
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
