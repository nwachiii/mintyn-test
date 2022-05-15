import React from 'react';
import {Login, Overview} from './pages';
import {ChakraProvider, theme} from '@chakra-ui/react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App () {
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/dashboard' element={<Overview />} />
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
