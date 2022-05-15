import {Flex, Stack} from '@chakra-ui/layout';
import React from 'react';
import { TransactionBox } from '../../components';

export const Overview = () => {
    return (
        <Flex>

		<Stack direction='row' spacing="37px">
			<TransactionBox description="Daiily Transaction Volume" value="2,342" />
			<TransactionBox description="Daiily Transaction Volume" value="2,342" />
			<TransactionBox description="Daiily Transaction Volume" value="2,342" />
			<TransactionBox description="Daiily Transaction Volume" value="2,342" />
		</Stack>
        </Flex>
	);
};
