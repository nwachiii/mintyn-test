import {VStack, Button, Flex, Text, Img} from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';
import {SidebarItems} from './SidebarItems';

export const Sidebar = () => {
	return (
		<VStack pt='33px' spacing='33px'>
			<Flex align='center'>
				<Button w='163px' colorScheme='green' borderRadius='3xl' fontSize='12px' lineHeight='14px'>
					GENERATE INVOICE
				</Button>
			</Flex>
			{SidebarItems.map((entry) => (
				<VStack w='100%' align='left' pl='2em'>
					<Text>{entry.title}</Text>
					{entry.items.map((item) => (
						<Link style={{display: 'flex', alignItems: 'center', margin: '.5em 0'}} to={`${item.route}`}>
                            <Img h='16px' w='19.48' src={item.icon} mr='.7em' /> {item.name}
						</Link>
					))}
				</VStack>
			))}
		</VStack>
	);
};
