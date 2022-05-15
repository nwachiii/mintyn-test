import {VStack, Heading, AlertIcon, Alert} from '@chakra-ui/react';
import React from 'react';
import {useParams} from 'react-router-dom';

export const DummyPage = () => {
	const {pageTitle} = useParams();
	return (
		<VStack justify='center' h='full' >
			<Alert status='warning' maxW="fit">
				<AlertIcon />
				<Heading> This page should contain {pageTitle.replace('_', ' ').toUpperCase()}</Heading>
			</Alert>
		</VStack>
	);
};
