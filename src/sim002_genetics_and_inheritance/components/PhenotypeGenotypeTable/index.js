import React from "react";
import "./style.scss";

export default (props) => {
  const {
    table: { body, caption, header },
  } = props;

  return (
    <div className="phenotype-genotype-table" aria-label={caption}>
      <table>
        <thead>
          <tr>
            <th scope="col">{header.phenotype}</th>
            <th scope="col">{header.genotype}</th>
          </tr>
        </thead>
        <tbody>
          {body.map((row) => {
            return (
              <tr key={row.id}>
                {row.data.map((col) => {
                  return (
                    <td 
                      key={col.id}
                      dangerouslySetInnerHTML={{ __html: col.data }}
                    ></td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
