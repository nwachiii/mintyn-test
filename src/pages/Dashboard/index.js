import React from 'react';
import {Outlet} from 'react-router-dom';
import {Flex, Grid, GridItem} from '@chakra-ui/layout';

import {NavBar, Sidebar} from '../../components';

export const Dashboard = () => {
	const username = JSON.parse(localStorage.getItem('mint_UserName'));
	return (
		<Flex direction='column'>
			<NavBar username={username} />
			<Grid minH='100vh' templateRows='repeat(2, 1fr)' templateColumns='repeat(6, 1fr)' gap={4}>
				<GridItem w='clamp(260px, 100%, 400px)' rowSpan={2} colSpan={1} boxShadow='lg'>
					<Sidebar />
				</GridItem>
				<GridItem maxW='1098px' rowSpan={2} colSpan={5} mx='30px' mt='33px'>
					<Outlet />
				</GridItem>
			</Grid>
		</Flex>
	);
};
