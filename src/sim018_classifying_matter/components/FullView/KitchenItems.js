import React from "react";
import Button from "../../../app/components/Button";
import "./style.scss";

const KitchenItems = (props) => {
  const { question, questions, onItemClick, fullViewBGAlt, isPopupActive } =
    props;

  return (
    <>
      <div className="instructions">
        {question &&
          question.instructions &&
          question.instructions.map((a, i) => (
            <p
              key={`inst-${i}-${question.id}`}
              dangerouslySetInnerHTML={{ __html: a }}
            ></p>
          ))}
      </div>
      <div role="img" className={`image-alt`} aria-label={fullViewBGAlt}></div>
      {questions.map((q) => {
        return (
          <div key={`${q.id}-int`}>
            <button
              title={q.alt}
              aria-label={q.alt}
              onClick={() => onItemClick(q.id)}
              aria-hidden={isPopupActive || null}
              tabIndex={isPopupActive ? -1 : null}
              className={` btn highlighter ${q.className}`}
            ></button>
            <Button
              key={q.id}
              isPopupActive
              text={q.label}
              label={q.altText}
              ariaHidden={true}
              onClick={() => onItemClick(q.id)}
              classes={`hotspot-btn label ${q.className}`}
            />
          </div>
        );
      })}
    </>
  );
};

export default KitchenItems;
