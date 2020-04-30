import React, { useEffect, useState } from 'react';

function Table(props) {
  const { cases } = props;
  const [titles, setTitles] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (cases.length) {
      setTitles(Object.keys(cases[0]));
    }
    setContent(cases);
  }, [cases]);

  // DRY

  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          {titles.map((title, index) => {
            return (
              <th scope="col" key={`${title}-${index}`}>
                {title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {content.map((caseItem, index) => {
          return (
            <tr key={index}>
              {titles.map((key) => {
                return (
                  <td scope="row" key={key}>
                    {caseItem[key]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
