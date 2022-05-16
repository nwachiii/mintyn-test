import React, {useMemo, useState} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';
import {Box, Divider, Flex, Heading, IconButton, Select, Stack, Text, VStack} from '@chakra-ui/react';

import {data} from './data';
import {Capsule} from './Capsule';
import {CustomTable} from '../shared/CustomTable';

export const PaymentTable = () => {
	const [page, setPage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const columns = useMemo(
		() => [
			{
				Header   : 'Item Type',
				accessor : (row) => {
					return `${row.itemType}`;
				}
			},

			{
				Header   : 'Price',
				accessor : (row) => {
					return row.price;
				}
			},
			{
				Header   : 'Transaction No',
				accessor : (row) => {
					return row.transactionNo;
				}
			},
			{
				Header   : 'Time',
				accessor : (row) => {
					return row.time;
				}
			},
			{
				Header   : 'Status',
				accessor : (row) => {
					return <Capsule data={row.paymentStatus} />;
				}
			}
		],
		[]
	);
	const memodata = useMemo(() => [...data], []);

	function handleNext () {
		if (page === totalPages) return;
		setPage(page + 1);
	}

	function handlePrevious () {
		if (page === 1) return;
		setPage(page - 1);
	}

	let x = perPage * (page - 1);
	let y = page * perPage;

	const totalPages = Math.ceil(data.length / perPage);
	return (
        <VStack spacing={2} w='100%'>
            <Heading textAlign='left' w="full"> <b>Payments</b> </Heading>
			<Flex p={2} alignItems='center' mb={3} justifyContent='space-between' w='98%' mx='auto' flex={1}>
				<Box d='flex'>
					<Text fontSize='14px' color='gray'>{`Showing ${x + 1} - ${y > data.length
						? data.length
						: y} of ${data.length} `}</Text>
				</Box>
				<Stack direction='row' alignItems='center' justifyContent='flex-end'>
					<Box d='flex' flexDirection='row'>
						<Text color='gray' w='100%' fontSize='14px'>
							Results per page:
						</Text>
					</Box>
					<Box mx={2}>
						<Select
							id='perPage'
							name='perPage'
							defaultValue={10}
							placeholder=''
							onChange={(e) => setPerPage(e.target.value)}>
							<option value={10}>10</option>
							<option value={15}>15</option>
							<option value={20}>20</option>
							<option value={25}>25</option>
							<option value={30}>30</option>
						</Select>
					</Box>
				</Stack>
			</Flex>
			<CustomTable columns={columns} data={memodata} page={page} perPage={perPage} />
			<Box d='flex' justifyContent='center' flexDirection='row' my={4} pos='relative'>
				<Stack direction='row' h='40px' p={2} d='flex' alignItems='center'>
					<IconButton
						colorScheme='black'
						aria-label='previous page'
						icon={<ChevronLeftIcon />}
						onClick={handlePrevious}
						variant='outline'
						size='sm'
						borderRadius='50%'
					/>
					<Divider orientation='vertical' />
					<Box>
						<input
							type='number'
							step={1}
							min={1}
							max={totalPages}
							onChange={(e) => setPage(e.target.value)}
							value={page}
							style={{
								color        : 'gray',
								minWidth     : 0,
								width        : '100%',
								padding      : '5px 0',
								textAlign    : 'center',
								borderRadius : '50%',
								border       : '2px solid',
								borderColor  : 'inherit',
								outline      : '2px solid transparent'
							}}
						/>
					</Box>
					<Box position='relative'>
						<Text color='gray' fontSize='14px'>
							{`out of ${totalPages}`}
						</Text>
					</Box>
					<Divider orientation='vertical' />
					<IconButton
						colorScheme='black'
						aria-label='next page'
						icon={<ChevronRightIcon />}
						onClick={handleNext}
						variant='outline'
						size='sm'
						borderRadius='50%'
					/>
				</Stack>
			</Box>
		</VStack>
	);
};
