import { Flex } from '@chakra-ui/react';
import React from 'react'

export const Capsule = ({ data }) => {
    let color = null;

    switch (data) {
        case 'Processing':
            color = 'yellow';
            break;
        case 'Pending':
            color = 'black';
            break;
        case 'Cancelled':
            color = 'red';
            break
        case 'Paid':
            color = 'green';
            break;
        default:
            break;
    }

    return (
        <Flex
            borderRadius='20px'
            color={color}
            textAlign='center'
            borderColor={color}
            py={2}
            px={3}
            width='fit-content'
            fontSize='14px'>
            {data}
        </Flex>
    );
}