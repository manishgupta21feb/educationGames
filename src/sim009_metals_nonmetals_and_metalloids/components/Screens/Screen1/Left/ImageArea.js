import React from "react"
import "./style.scss"
import { useEffect } from "react"
const LeftArea = ({ selectedMcq, mcq }) => {
    useEffect(() => {
        mcq()
    }, [])
    return (
        <div className="left-area">
            <div className={`left-element`}>
                {/* <div role="img" aria-label={selectedMcq.altText} className={`${selectedMcq.label}`}></div> */}
                <img src={selectedMcq.imageSource} className={`${selectedMcq.label}`} alt={selectedMcq.altText}/>
                <p aria-label={selectedMcq.label} className="label">{selectedMcq.label}</p>
            </div>

        </div>
    )
}

export default LeftArea