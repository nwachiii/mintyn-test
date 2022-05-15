
import {
	Center,
	Input,
	Text,
	Button,
	VStack,
	FormLabel,
	InputGroup,
	FormControl,
	useColorMode,
	FormHelperText,
	FormErrorMessage,
	InputLeftElement,
	useColorModeValue,
} from '@chakra-ui/react';
import {FaRegUser} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

import {ToggleThemeIcon} from '../components';
import {MintLogo} from '../components';

export const Login = () => {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const LocalStorageuserName = JSON.parse(localStorage.getItem('mint_UserName'));

	const handleSignIn = () => {
		navigate('/dashboard/overview', {state: {username: name}});
		localStorage.setItem('mint_UserName', JSON.stringify(name));
	};

	const handleInputChange = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};

	const isError = name.length === 0

	useEffect(
		() => {
			setName(LocalStorageuserName ? LocalStorageuserName : '');
		},
		[LocalStorageuserName]
	);

	const color = useColorModeValue('white', 'gray.800');
	const {colorMode} = useColorMode();

	return (
		<Center
			px="1em"
			minH='100vh'
			color={color}
			bgGradient={colorMode === 'light' ? 'linear(to-br, black, teal.600)' : 'linear(to-tr, red.100, white)'}>
			<ToggleThemeIcon />
			<VStack spacing={4} align='stretch'>
				<Center
					mb={6}
					flexDirection='column'
					borderRadius={colorMode === 'light' ? '3xl' : '55px'}
					boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
					<MintLogo />
					<Text pb={4} fontWeight='bold'>
						USER LOGIN
					</Text>
				</Center>
				<FormControl isInvalid={isError} isRequired>
					<FormLabel htmlFor='first-name'>Username</FormLabel>
					<InputGroup>
						<InputLeftElement pointerEvents='none' children={<FaRegUser color='gray.300' />} />
						<Input
							value={name}
							onChange={handleInputChange}
							variant='outline'
							borderColor='gray.400'
							placeholder='Username'
						/>
					</InputGroup>
					{!isError ? (
						<FormHelperText color="gray.600" textAlign="center">Your username is all you need to get started</FormHelperText>
					) : (
						<FormErrorMessage>Username is required.</FormErrorMessage>
					)}
				</FormControl>
				<Button
					p={6}
					color='#FFF'
					borderRadius='md'
					bg="#1875F0"
					onClick={!isError && handleSignIn}
					_hover={{
						bg     : '#FFF',
						color  : '#03a438',
						border : '2px solid #03a438'
					}}>
					Login
				</Button>
			</VStack>
		</Center>
	);
};

