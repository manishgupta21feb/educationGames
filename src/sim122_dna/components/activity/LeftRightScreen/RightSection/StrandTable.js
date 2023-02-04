import React, { useEffect, useRef } from 'react';

const StrandTable = (props) => {

  const tableRef = useRef();

  const {
    screen6TableData,
    screen6TableHeadings,
    tableColSequence
  } = props;

  useEffect(() => {
    const elements = tableRef.current.querySelectorAll(".bodyItem");
    tableColSequence.map((item) => {
      elements[item].setAttribute('rowspan', '4');
      elements[item].setAttribute('scope', 'rowgroup');
    })
  }, []);

  return (
    <div className="custom-table" ref={tableRef}>
      <table>
        <thead>
          <tr>
            <th rowSpan="2">{screen6TableHeadings.first}</th>
            <th colSpan="4">{screen6TableHeadings.second}</th>
            <th rowSpan="2">{screen6TableHeadings.third}</th>
          </tr>
          <tr>
            {
              screen6TableData[0].map((headItem, i) =>
                <th key={i}>{headItem}</th>
              )
            }
          </tr>
        </thead>
        <tbody>
          {
            screen6TableData[1].map((bodyItems, i) =>
              <tr key={i}>
                {
                  bodyItems.map((item, bodyIndex) => {
                    if ((i == 0 || i == 4 || i == 8 || i == 12) && bodyIndex == 0) {
                      return <th key={bodyIndex} scope="row" className="bodyItem">{item}</th>
                    } else {
                      return <td key={bodyIndex} className="bodyItem">{item}</td>
                    }
                  }
                  )
                }
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default StrandTable;