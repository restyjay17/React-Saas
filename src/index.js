import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		{/*<Provider>*/}
			<Router>
				<Routes>
					<Route path='/*' element={<App />} />
				</Routes>
			</Router>
		{/*</Provider>*/}
	</React.StrictMode>,
	document.getElementById('root')
);