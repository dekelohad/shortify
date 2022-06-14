import React from 'react';
import useWindowSize from '../../../../hooks/useWindowSize';
import { truncateText } from '../../../../utils/stringUtils';
import { Button } from '../../../../components';
import './Table.css';

const Table = ({ rows, action, tableData }) => {
  const size = useWindowSize();
  return (
    <table>
      <thead>
        <tr>
          {rows.map((row) => (
            <th key={row.id}>{row.name}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {tableData.map((row) => (
          <tr key={row._id}>
            <td>{row.createdAt}</td>
            <td>
              {size.width > 720
                ? truncateText(row.fullUrl, 58)
                : truncateText(row.fullUrl, 10)}
            </td>
            <td>{row.shortUrl}</td>
            <td>{row.clicks}</td>
            <td>
              {' '}
              <Button text="Delete" onClick={() => action(row.shortUrl)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
