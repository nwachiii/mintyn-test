import React from 'react';
import {Dashboard, Login, Overview} from './pages';
import {ChakraProvider, theme} from '@chakra-ui/react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App () {
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path="overview" element={<Overview />} />
            <Route path="login" element={<Login />} />
          </Route>
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
