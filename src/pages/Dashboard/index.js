import React from 'react';
import {Outlet} from 'react-router-dom';
import {Flex, Grid, GridItem} from '@chakra-ui/layout';

import {NavBar, Sidebar} from '../../components';

export const Dashboard = () => {
	return (
		<Flex direction='column'>
			<NavBar />
			<Grid h='100vh' templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' gap={4}>
                <GridItem rowSpan={2} colSpan={1} boxShadow="lg">
                    <Sidebar />
                </GridItem>
				<GridItem maxW="1098px" rowSpan={2} colSpan={4} mx="30px" mt="33px" >
					<Outlet />
				</GridItem>
			</Grid>
		</Flex>
	);
};
