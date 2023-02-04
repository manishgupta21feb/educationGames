import React, { useEffect, useState, useRef } from "react";
import Button from "../../../app/components/Button";
import "./style.scss";

export default (props) => {
  const { onFlowerHighlighte, plant, onCloseClick, close, genotypeAnalyzer } =
    props;
  const ref = React.createRef(null);
  const buttonRef = useRef(null);

  const [showText, setShowState] = useState(true);

  useEffect(() => {
    if (ref && ref.current) {
      setTimeout(() => {
        buttonRef.current.focus();
      }, 600);
      $(ref.current).draggable({
        containment: ref.current.parentElement,
        handle: ".drag-handle-left, .drag-handle-bottom",
        stop: (event, ui) => {
          setShowState(true);
          if (ui.offset && (ui.offset.left || ui.offset.top)) {
            const x = parseInt(ui.offset.left) - 2;
            const y = parseInt(ui.offset.top) - 2;
            const elem = document.elementFromPoint(x, y);
            if (elem && elem.hasAttribute("data-title")) {
              const dataTitle = elem.getAttribute("data-title");
              if (dataTitle) {
                onFlowerHighlighte(dataTitle);
              }
            }
          }
        },
        start: (event, ui) => {
          setShowState(false);
          onFlowerHighlighte("");
        },
      });
    }
  }, []);

  const genoText = plant && showText ? plant.genotypeText : "";

  return (
    <div ref={ref} className="genotype-box">
      <div className="point"></div>
      <Button
        label={close}
        ref={buttonRef}
        onClick={onCloseClick}
        classes={`cross icon icon-only`}
      />
      <span className="gynotype-title">{genotypeAnalyzer}</span>
      <span
        className="gynotype-text"
        dangerouslySetInnerHTML={{ __html: genoText }}
      ></span>
      <div className="drag-handle-left"></div>
      <div className="drag-handle-bottom"></div>
    </div>
  );
};
