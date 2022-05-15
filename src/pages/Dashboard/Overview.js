import {VStack, HStack, Grid, GridItem, Stack, Text, Flex} from '@chakra-ui/react';
import React from 'react';

import {CustomBox, TransactionBox, TransactionChart} from '../../components';

export const Overview = () => {
	return (
		<VStack spacing='50px'>
			{/* Transaction Boxes */}
			<Stack direction='row' spacing='57px' mx='auto'>
				<Flex gap='20px'>
					<TransactionBox description='Daiily Transaction Volume' value='2,342' />
					<TransactionBox description='Daiily Transaction Volume' value='2,342' />
				</Flex>
				<Flex gap='20px'>
					<TransactionBox description='Daiily Transaction Volume' value='2,342' />
					<TransactionBox description='Daiily Transaction Volume' value='2,342' />
				</Flex>
			</Stack>

			{/* Transaction chart */}
			<Grid h='329px' w='100%' templateRows='repeat(2, 1fr)' templateColumns='repeat(3, 1fr)' gap={4}>
				<GridItem rowSpan={2} colSpan={1}>
					<TransactionChart />
				</GridItem>
				<GridItem colSpan={2}>
					<CustomBox boxTitle='Orders' py={6}>
						<HStack>
							<Text>Pending Orders:</Text>{' '}
							<Text color='yellow.300' fontWeight={700}>
								20
							</Text>
						</HStack>
						<HStack>
							<Text>Reconciled Orders:</Text> <Text color='green'>80</Text>
						</HStack>
						<HStack>
							<Text>Total Orders:</Text> <Text color='blue'>100</Text>
						</HStack>
					</CustomBox>
				</GridItem>
				<GridItem colSpan={2}>
					<CustomBox boxTitle='Payments'>
						<HStack>
							<Text>Un-reconciled Payments:</Text> <Text color='yellow'>20</Text>
						</HStack>
						<HStack>
							<Text>Reconciled Payments:</Text> <Text color='green'>80</Text>
						</HStack>
						<HStack>
							<Text>Total Payments:</Text> <Text color='blue'>100</Text>
						</HStack>
					</CustomBox>
				</GridItem>
			</Grid>
		</VStack>
	);
};
