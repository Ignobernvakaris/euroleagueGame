import React, { useMemo } from "react";
import Header from "../components/Header";
import { useTable, useSortBy, useFilters } from "react-table";
import 'bootstrap/dist/css/bootstrap.min.css';

const PredictionTable = () => {
  const data = useMemo(
    () => [
      { rank: 1, participant: "Dalyvis 1", points: 10 },
      { rank: 2, participant: "Dalyvis 2", points: 8 },
      { rank: 3, participant: "Dalyvis 3", points: 6 },
      { rank: 4, participant: "Dalyvis 4", points: 4 },
      { rank: 5, participant: "Dalyvis 5", points: 2 },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Vieta",
        accessor: "rank",
      },
      {
        Header: "Dalyvis",
        accessor: "participant",
      },
      {
        Header: "Taškai",
        accessor: "points",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy
  );

  return (
    <div>
      <Header />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container text-center">
          <h1>Euroleague spelionė</h1>
          <div className="input-group mb-3">
            <span className="input-group-text">Ieškoti dalyvio</span>
            <input
              type="text"
              className="form-control"
              placeholder="Filtruoti dalyvius..."
              onChange={(e) => {
                setFilter("participant", e.target.value || undefined); // Set undefined to remove the filter
              }}
              style={{ borderRadius: "5px" }}
            />
          </div>
          <table className="table table-bordered table-striped mt-4" {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PredictionTable;
