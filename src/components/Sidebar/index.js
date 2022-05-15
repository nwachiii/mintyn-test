import {VStack, Button, Text, Img, Box} from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';
import {SidebarItems} from './SidebarItems';

export const Sidebar = () => {
	return (
		<VStack pt='33px' spacing='28px'>
			<Button w='168px' colorScheme='green' borderRadius='3xl' fontSize='12px' lineHeight='14px'>
				GENERATE INVOICE
			</Button>
			{SidebarItems.map((entry) => (
				<VStack w='100%' align='left'>
					<Text pl='2.1em'>{entry.title}</Text>
					{entry.items.map((item) => (
						<Box
							h='36px'
							alignItems='center'
							as={Link}
							to={`${item.route}`}
							display='flex'
							_hover={{
								background : 'blue.50'
							}}
							_focus={{
								background: 'blue.50',
								borderLeft: '7px solid #1875F0',
								borderRadius: '3px'
							}}
							pl='2.1em'>
								<Img h='16px' w='19.48px' src={item.icon} mr='.7em' /> {item.name}
						</Box>
					))}
				</VStack>
			))}
		</VStack>
	);
};
