import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Movie from './SingleMovie';

function App() {
	return (
		<Routes>
			<Route path={'/'} element={<Home />} />
			<Route path={'movies/:id'} element={<Movie />} />
			<Route path={'*'} element={<h2>404 Page not found</h2>} />
		</Routes>
	);
}

export default App;
