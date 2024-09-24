import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout';
import { Login } from './modules';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>

				{/* public routes */}
				<Route exaxt path='/' element={<Login />} />

			</Route>
		</Routes>
	)
}

export default App;