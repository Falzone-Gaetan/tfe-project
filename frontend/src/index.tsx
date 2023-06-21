import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppLayout } from './pages/AppLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import { LoginForm } from './pages/LoginForm';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LoginForm />} />
					<Route path='/Home/*' element={<AppLayout />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
