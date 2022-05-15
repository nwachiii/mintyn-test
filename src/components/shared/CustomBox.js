import { Flex, Stack, Text, Image } from '@chakra-ui/react'
import React from 'react'

import progress from '../../assets/progress.png'

export const CustomBox = ({boxTitle, children}) => {
  return (
    <Flex w="409px" bg='#FFFFFF' boxShadow='lg' border=' 1px solid #EFEFEF' align="center" justify="space-between" px='21px' py={6}>
			<Stack spacing={1}>
				<Text fontSize="18px" color="#262626" lineHeight="19px" fontWeight={700}>{boxTitle}</Text>
              <Image w="305px" h="4px" src={progress} />
              {children}
			</Stack>
			
		</Flex>
  )
}
