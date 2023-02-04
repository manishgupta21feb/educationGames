import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import periodicTableData from "./data";

const PeriodicTable = (props) => {
  const { groupBy, tableData, showAtomicMass, periodicTableColor } = props;
  const { tableContent, tableCaption } = periodicTableData;
  const _atomicmass = showAtomicMass ? "atomicmass" : "";

  const setCellAriaLabel = (cellData) => {
    let hiddenElement = "";
    const customCellData = tableData.tableCellAriaLabel[cellData.symbol];

    if (customCellData) {
      hiddenElement = customCellData;
    } else if (
      cellData.column === 3 &&
      (cellData.row === 6 || cellData.row === 7)
    ) {
      hiddenElement = `${tableData.atomicNumberText} ${cellData.name}`;
    } else if (cellData.symbol != undefined) {
      hiddenElement = `${tableData.atomicNumberText} ${cellData.atomicnumber} ${
        tableData.symbolText
      } ${cellData.symbol ? cellData.symbol.split("").join(" ") : ""} ${
        showAtomicMass && cellData.atomicmass
          ? `${tableData.atomicMassText} ${cellData.atomicmass}`
          : ""
      }`;
      if (groupBy) {
        hiddenElement = `${tableData.atomicNumberText} ${
          cellData.atomicnumber
        } ${
          showAtomicMass && cellData.atomicmass
            ? `${tableData.atomicMassText} ${cellData.atomicmass}`
            : ""
        } ${tableData.symbolText} ${cellData.groupBy} ${
          cellData.symbol ? cellData.symbol.split("").join(" ") : ""
        }`;
      }
    }
    return hiddenElement;
  };

  const cell = (tableColor, cellData) => {
    let returnValue = null;
    if (tableColor !== "noColorNoText" && cellData.name !== undefined) {
      if (cellData.name == "") {
        returnValue = (
          <span dangerouslySetInnerHTML={{ __html: "&nbsp;" }}></span>
        );
      } else {
        returnValue = (
          <div>
            <div className="sr-only sr-image">{setCellAriaLabel(cellData)}</div>
            <div className="atomicNumber" aria-hidden>
              {cellData.atomicnumber}
            </div>
            <div className="symbol" aria-hidden>
              {cellData.symbol}
            </div>
            <span className="groupText opacity0" aria-hidden>
              {cellData.group}
            </span>
            <span className="periodText opacity0" aria-hidden>
              {cellData.period}
            </span>
            {showAtomicMass ? (
              <span className="atomicMass" aria-hidden>
                {cellData.atomicmass}
              </span>
            ) : null}
          </div>
        );
      }
    }
    return returnValue;
  };

  return (
    <div
      aria-hidden={props.ariahidden}
      className={`periodic-table-container ${periodicTableColor} ${_atomicmass}`.trim()}
    >
      <table>
        <caption className="sr-only sr-image">{tableCaption}</caption>
        <tbody>
          {tableContent.map((rowData, index) => {
            return (
              <tr key={`row${index + 1}`} className={`row${index + 1}`}>
                {rowData.map((cellData) => {
                  const classes = `${
                    cellData.name === "" ? "hideElement" : "elements"
                  }${cellData.category ? ` ${cellData.category}` : ""}${
                    cellData.block ? ` ${cellData.block}-block` : ""
                  } cell${cellData.row}_${cellData.column}`;
                  return (
                    <td
                      className={classes}
                      key={`cell${cellData.row}_${cellData.column}`}
                    >
                      {cell(periodicTableColor, cellData)}
                    </td>
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

PeriodicTable.propTypes = {
  tableData: PropTypes.object,
  showAtomicMass: PropTypes.bool,
  periodicTableColor: PropTypes.string.isRequired,
};

PeriodicTable.defaultProps = {
  showAtomicMass: false,
  periodicTableColor: "colorByCategory", //colorByCategory, colorByBlock, noColor, noColorNoText
  tableData: {
    tableCellAriaLabel: {},
    symbolText: "Symbol",
    atomicMassText: "Atomic mass",
    atomicNumberText: "Atomic number",
  },
};

export default PeriodicTable;
