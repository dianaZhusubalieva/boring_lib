import React, { useMemo } from "react";
import "components/table/styles.scss";

interface Column {
  accessor: string;
  Header: string;
  Cell?: (v: any) => void;
}
interface Props {
  tableData: {
    columns: Column[];
    rows: {}[];
  };
}

const Table: React.FC<Props> = ({ tableData }) => {
  const { rows, columns } = tableData;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Номер</th>
          {columns.map(({ Header }, i) => (
            <th key={i}>{Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            {columns.map((column) => (
              <>
                <td key={column.accessor}>
                  {column?.Cell && typeof column.Cell === "function"
                    ? column.Cell(row)
                    : // @ts-ignore
                      row[column.accessor]}
                </td>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
