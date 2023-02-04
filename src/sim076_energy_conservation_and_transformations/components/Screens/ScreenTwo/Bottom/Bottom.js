import React from "react"
import ContinueButton from "../../../../containers/ContinueContainer";

const Bottom = (props) => {
  const { activeHotspot, isScreenToggle } = props
  return (
    <div className="bottom-container">
      {!isScreenToggle && <p className="active-Hotspot-Heading"
        dangerouslySetInnerHTML={{ __html: activeHotspot.hotspotText }} />}
      {isScreenToggle && <>
        {activeHotspot.assets.associatedText.map((t, i) => {
          return (
            <p className="active-Hotspot-Heading"
              key={`text${i}`}
              dangerouslySetInnerHTML={{ __html: t }} />
          )
        })}

        <ContinueButton />
      </>
      }
    </div>
  )
}

export default Bottom