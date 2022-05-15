import {Box, Stack} from '@chakra-ui/layout';
import React from 'react';

export const Overview = () => {
	return (
		<Stack direction='row' spacing="37px">
			<Box h={75} w={253} bg='#FFFFFF' boxShadow='lg' />
			<Box h={75} w={253} bg='#FFFFFF' boxShadow='lg' />
			<Box h={75} w={253} bg='#FFFFFF' boxShadow='lg' />
			<Box h={75} w={253} bg='#FFFFFF' boxShadow='lg' />
		</Stack>
	);
};
