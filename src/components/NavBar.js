import {
	Box,
	Grid,
	Link,
	Text,
	Input,
	Image,
	HStack,
	VStack,
	Avatar,
	Heading,
	GridItem,
	useBoolean,
	InputGroup,
	useOutsideClick,
	InputLeftElement
} from '@chakra-ui/react';
import React, {useRef} from 'react';
import {Search2Icon} from '@chakra-ui/icons';

import NotificationIcon from '../assets/notification-icon.png';
import userImg from '../assets/user_ojo.png';

export const NavBar = () => {
	const [clicked, setClicked] = useBoolean();
	const searchRef = useRef();
	useOutsideClick({
		ref     : searchRef,
		handler : () => setClicked.toggle
	});
	return (
		<Box w='full' bg='#FFFFFF' boxShadow='lg' h='60px' px='42px' py='15px'>
			<Grid h='100vh' templateColumns='repeat(5, 1fr)'>
				<GridItem colSpan={1}>
					<Heading fontWeight='900' fontSize='24px' lineHeight='28.13px' color='#1875F0'>
						TransMonitor
					</Heading>
				</GridItem>
				<GridItem flexDirection='row' maxW='1098px' colSpan={4}>
					<HStack spacing={10} color='#647787'>
						<InputGroup maxW={300} mr='auto' h={9}>
							<InputLeftElement
								pointerEvents='none'
								children={<Search2Icon mr='16px' color='gray.300' />}
							/>
							<Input
								_focus={{
									borderColor : 'gray.200',
									color       : '#1875F0'
								}}
								type='search'
								onMouseLeave={setClicked.off}
								onClick={setClicked.toggle}
								variant={clicked ? 'flushed' : 'unstyled'}
								placeholder='Search...'
							/>
						</InputGroup>
						<Link href='/support'>Support</Link>
						<Link href='/faq'>FAQ</Link>
						<Image src={NotificationIcon} h='23px' w='21px' />
						<HStack>
							<VStack spacing={0.7}>
								<Text ml='auto' fontSize='10px' lineHeight='13px'>
									Hello
								</Text>
								<Text fontSize='14px' lineHeight='19px'>
									Oluwaleke Ojo
								</Text>
							</VStack>
							<Avatar h='36px' w='36px' name='Christian Nwamba' src={userImg} />
						</HStack>
					</HStack>
				</GridItem>
			</Grid>
		</Box>
	);
};
