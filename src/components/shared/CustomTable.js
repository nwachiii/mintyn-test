import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { Table, Thead, Tr, Tbody, Td, chakra, Th } from '@chakra-ui/react';
import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';
import './CustomTable.css';

export function CustomTable({ data, columns, page, perPage }) {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  let x = perPage * (page - 1);
  let y = page * perPage;

  const selectedRows = rows.slice(x, y);

  return (
    <>
      <Table {...getTableProps} fontSize="14px" className="orderTable">
        <Thead className="orderTable__header">
          {headerGroups.map(headerGroup => (
            <Tr
              {...headerGroup.getHeaderGroupProps()}
              className="orderTable__header-rows"
            >
              {headerGroup.headers.map(column => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                >
                  {column.render('Header')}
                  <chakra.span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()} className="orderTable__body">
          {selectedRows.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} className="orderTable__body-row">
                {row.cells.map(cell => {
                  return (
                    <Td
                      {...cell.getCellProps()}
                      className="orderTable__body-data"
                    >
                      {cell.render('Cell')}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
