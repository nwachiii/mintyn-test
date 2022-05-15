import {VStack} from '@chakra-ui/layout';
import React from 'react';
import {Link} from 'react-router-dom';

export const Sidebar = () => {
	return (
		<VStack>
			<Link style={{margin: '2em'}} to='/dashboard/overview'>
				Overview
			</Link>
			<Link to='/dashboard/login'>Login</Link>
		</VStack>
	);
};
