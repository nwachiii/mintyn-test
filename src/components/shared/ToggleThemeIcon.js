import React from 'react';
import {useColorMode, useColorModeValue, Icon, HStack} from '@chakra-ui/react';

import {SunIcon, MoonIcon} from '@chakra-ui/icons';
import { animation } from '../../helpers';

export const ToggleThemeIcon = (props) => {
	const {colorMode, toggleColorMode} = useColorMode();
	const text = useColorModeValue('dark', 'light');

	return (
		<HStack spacing={4} position='absolute' top={{base: 8, md: 12}} right={{base: 9, md: 12}}>
			<Icon
				animation={animation}
				size='md'
				fontSize='lg'
				aria-label={`Switch to ${text} mode`}
				variant='ghost'
				color='current'
				marginLeft='2'
				onClick={toggleColorMode}
				as={colorMode === 'light' ? SunIcon : MoonIcon}
				
			/>
		</HStack>
	);
};
