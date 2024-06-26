import React from 'react';
import ReactDOM from 'react-dom/client';
import { DashboardLayout, NotFound, Root } from './layouts';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import './index.css';
import { Dashboard, Home } from '.';
import { AuthProvider } from './contexts/auth';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<NotFound />}>
			<Route index element={<Home />} />
			<Route path="/dashboard" element={<DashboardLayout />}>
				<Route index element={<Dashboard />} />
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
