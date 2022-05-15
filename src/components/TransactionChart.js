import React from 'react';
import {ChevronDownIcon} from '@chakra-ui/icons';
import {
	Flex,
	Text,
	SimpleGrid,
	Image,
	Heading,
	HStack,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	VStack
} from '@chakra-ui/react';

import graph from '../assets/graph.png';
import leftBtn from '../assets/left-button.png';
import rightBtn from '../assets/right-button.png';
const ChartHeader = () => {
	return (
		<Flex justify='space-between' w='90%' align='center' pt='23px'>
			<Heading fontSize='18px' lineHeight='24px' color='#4F4F4F' fontWeight={700}>
				Today: 5, Aug 2018
			</Heading>
			<HStack spacing={6}>
				<Menu w='138px' h='31px' color='#4F4F4F'>
					<MenuButton bg='gray.50' variant='outline' as={Button} rightIcon={<ChevronDownIcon />}>
						1 Jan - 1 Jun
					</MenuButton>
					<MenuList>
						<MenuItem>1 Jan - 1 Jun</MenuItem>
						<MenuItem>1 July - 1 Dec</MenuItem>
					</MenuList>
				</Menu>
				<HStack spacing={2} h='22.97px'>
					<Image w='29.36px' src={leftBtn} />
					<Image w='29.36px' src={rightBtn} />
				</HStack>
			</HStack>
		</Flex>
	);
};
export const TransactionChart = () => {
	const Months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun'];
	return (
		<VStack w='689px' position='relative' h='100%' bg='#FFFFFF' boxShadow='lg' border=' 1px solid #EFEFEF' spacing="45px">
			<ChartHeader />
			<SimpleGrid w="100%" minChildWidth='70px' spacing='40px'>
				{Months.map((month) => <Text fontWeight="bold" textAlign='center'>{month}</Text>)}
			</SimpleGrid>
			<Image bottom={0} position='absolute' w='full' h='236.96px' src={graph} />
		</VStack>
	);
};
