import React from 'react'

const ForceDetails = (props) => {

    const { tableOne, tableTwo, textOne, textTwo, valuePosition, hideTable } = props;

    return (
        <div className={"outer-formula-box" + `${valuePosition}`}>
            {!hideTable &&
                <div className="table-one">
                    <p className="sr-only">{tableOne.text}</p>
                    <span aria-hidden={true} dangerouslySetInnerHTML={{ __html: tableOne.text }}></span>
                    <p className="sr-only">{tableOne.altFormula}</p>
                    <span aria-hidden={true} dangerouslySetInnerHTML={{ __html: tableOne.formula }}></span>
                    <p className="sr-only">{tableOne.altCalculation}</p>
                    <span aria-hidden={true} dangerouslySetInnerHTML={{ __html: tableOne.calculation }}></span>
                    <p className="sr-only">{tableOne.altValue}</p>
                    <span aria-hidden={true} dangerouslySetInnerHTML={{ __html: tableOne.value }}></span>
                </div>}
            <div className="text-one">
                <p className="sr-only">{textOne.altText}</p>
                <p aria-hidden={true} dangerouslySetInnerHTML={{ __html: textOne.text }}></p>
                <p aria-hidden={true} dangerouslySetInnerHTML={{ __html: textOne.value }}></p>
            </div>
            <div className="text-two">
                <p className="sr-only">{textTwo.altText}</p>
                <p aria-hidden={true} dangerouslySetInnerHTML={{ __html: textTwo.text }}></p>
                <p aria-hidden={true} dangerouslySetInnerHTML={{ __html: textTwo.value }}></p>
            </div>
            {!hideTable && <div className="table-two">
                <p className="sr-only">{tableTwo.text}</p>
                <span aria-hidden={true} dangerouslySetInnerHTML={{ __html: tableTwo.text }}></span>
                <p className="sr-only">{tableTwo.altFormula}</p>
                <span aria-hidden={true} dangerouslySetInnerHTML={{ __html: tableTwo.formula }}></span>
                <p className="sr-only">{tableTwo.altCalculation}</p>
                <span aria-hidden={true} dangerouslySetInnerHTML={{ __html: tableTwo.calculation }}></span>
                <p className="sr-only">{tableTwo.altValue}</p>
                <span aria-hidden={true} dangerouslySetInnerHTML={{ __html: tableTwo.value }}></span>
            </div>}
        </div>
    )
}

export default ForceDetails
