import React, { useMemo, useState } from "react";
import Select from "react-select";
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGlobalFilter,
} from "react-table";

const Table = () => {
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [frozenColumn] = useState(null);

  const data = useMemo(
    () => [
      {
        id: 1,
        name: "John Doe",
        age: 25,
        city1: "New York",
        city2: "New York",
        city3: "New York",
        city4: "New York",
        city5: "New York",
        city6: "New York",
        city7: "New York",
        city8: "New York",
        city9: "New York",
        city10: "New York",
        city11: "New York",
        city12: "New York",
        city13: "New York",
        city14: "New York",
        city15: "New York",
        city16: "New York",
        city17: "New York",
        city18: "New York",
        city19: "New York",
        city20: "New York",
      },
      {
        id: 2,
        name: "Jane Smith",
        age: 32,
        city1: "London",
        city2: "New York",
        city3: "New York",
        city4: "New York",
        city5: "New York",
        city6: "New York",
        city7: "New York",
        city8: "New York",
        city9: "New York",
        city10: "New York",
        city11: "New York",
        city12: "New York",
        city13: "New York",
        city14: "New York",
        city15: "New York",
        city16: "New York",
        city17: "New York",
        city18: "New York",
        city19: "New York",
        city20: "New York",
      },
      {
        id: 3,
        name: "Bob Johnson",
        age: 45,
        city1: "Paris",
        city2: "New York",
        city3: "New York",
        city4: "New York",
        city5: "New York",
        city6: "New York",
        city7: "New York",
        city8: "New York",
        city9: "New York",
        city10: "New York",
        city11: "New York",
        city12: "New York",
        city13: "New York",
        city14: "New York",
        city15: "New York",
        city16: "New York",
        city17: "New York",
        city18: "New York",
        city19: "New York",
        city20: "New York",
      },
      {
        id: 4,
        name: "Bob Johnson",
        age: 45,
        city1: "Paris",
        city2: "New York",
        city3: "New York",
        city4: "New York",
        city5: "New York",
        city6: "New York",
        city7: "New York",
        city8: "New York",
        city9: "New York",
        city10: "New York",
        city11: "New York",
        city12: "New York",
        city13: "New York",
        city14: "New York",
        city15: "New York",
        city16: "New York",
        city17: "New York",
        city18: "New York",
        city19: "New York",
        city20: "New York",
      },
      {
        id: 5,
        name: "Bob Johnson",
        age: 45,
        city1: "Paris",
        city2: "New York",
        city3: "New York",
        city4: "New York",
        city5: "New York",
        city6: "New York",
        city7: "New York",
        city8: "New York",
        city9: "New York",
        city10: "New York",
        city11: "New York",
        city12: "New York",
        city13: "New York",
        city14: "New York",
        city15: "New York",
        city16: "New York",
        city17: "New York",
        city18: "New York",
        city19: "New York",
        city20: "New York",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id", show: true },
      { Header: "Name", accessor: "name", show: true },
      { Header: "Age", accessor: "age", show: true },
      { Header: "City1", accessor: "city1", show: true },
      { Header: "City2", accessor: "city2", show: true },
      { Header: "City3", accessor: "city3", show: true },
      { Header: "City4", accessor: "city4", show: true },
      { Header: "City5", accessor: "city5", show: true },
      { Header: "City6", accessor: "city6", show: true },
      { Header: "City7", accessor: "city7", show: true },
      { Header: "City8", accessor: "city8", show: true },
      { Header: "City9", accessor: "city9", show: true },
      { Header: "City10", accessor: "city10", show: true },
      { Header: "City11", accessor: "city11", show: true },
      { Header: "City12", accessor: "city12", show: true },
      { Header: "City13", accessor: "city13", show: true },
      { Header: "City14", accessor: "city14", show: true },
      { Header: "City15", accessor: "city15", show: true },
      { Header: "City16", accessor: "city16", show: true },
      { Header: "City17", accessor: "city17", show: true },
      { Header: "City18", accessor: "city18", show: true },
      { Header: "City19", accessor: "city19", show: true },
      { Header: "City20", accessor: "city20", show: true },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { pageIndex, pageSize },
    gotoPage,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const dropdownOptions = columns.map((column) => ({
    value: column.accessor,
    label: column.Header,
  }));

  // Helper function to calculate the left position for frozen columns
  function getFrozenColumnLeft(columnIndex) {
    let left = 0;
    for (let i = 0; i < columnIndex; i++) {
      if (!hiddenColumns.includes(columns[i].accessor)) {
        left += 120;
      }
    }
    return left;
  }

  return (
    <div>
      <div>
        <label>Search: </label>
        <input type="text" onChange={(e) => setGlobalFilter(e.target.value)} />
      </div>
      <div>
        <label>Hide Columns: </label>
        <Select
          isMulti
          options={dropdownOptions}
          onChange={(selectedOptions) =>
            setHiddenColumns(selectedOptions.map((option) => option.value))
          }
        />
      </div>
      <div style={{ overflowX: "auto" }}>
        <table {...getTableProps()} style={{ minWidth: "100%" }}>
          <colgroup>
            {headerGroups.map((headerGroup) =>
              headerGroup.headers.map((column, columnIndex) => {
                const isVisible = !hiddenColumns.includes(column.id);
                return (
                  <col
                    key={columnIndex}
                    style={{
                      visibility: isVisible ? "visible" : "collapse",
                      minWidth: "120px",
                    }}
                  />
                );
              })
            )}
          </colgroup>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, columnIndex) => {
                  const isVisible = !hiddenColumns.includes(column.id);
                  const isFrozen =
                    frozenColumn === column.id || columnIndex < 4;

                  return (
                    <th
                      {...column.getHeaderProps()}
                      style={{
                        visibility: isVisible ? "visible" : "collapse",
                        position: isFrozen ? "sticky" : "static",
                        left: isFrozen
                          ? `${getFrozenColumnLeft(columnIndex)}px`
                          : "auto",

                        zIndex: 1,
                        background: "white",
                      }}
                    >
                      <div {...column.getSortByToggleProps()}>
                        {isVisible && column.render("Header")}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " 🔽"
                              : " 🔼"
                            : ""}
                        </span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, cellIndex) => {
                    const isVisible = !hiddenColumns.includes(cell.column.id);

                    // ** for Freeze Column
                    const isFrozen =
                      frozenColumn === cell.column.id || cellIndex < 4;

                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          visibility: isVisible ? "visible" : "collapse",
                          position: isFrozen ? "sticky" : "static",
                          left: isFrozen
                            ? `${getFrozenColumnLeft(cellIndex)}px`
                            : "auto",
                          zIndex: 0,
                          background: "white",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of{" "}
            {Math.ceil(preGlobalFilteredRows.length / pageSize)}
          </strong>
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "50px" }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Table;
