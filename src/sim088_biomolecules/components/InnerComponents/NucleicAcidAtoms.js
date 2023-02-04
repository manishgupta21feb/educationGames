import "./style.scss";
import React from "react";
import { isRotate } from "../../helper.js";

const NucleicAcidAtoms = (props) => {
  let { type, size, length, atomname, dropZone } = props;

  if (type == 1) {
    return (
      <div
        aria-hidden
        className={`drag1 dragItem ${length == 10 ? `disabled_dnd` : ``} `}
        data-id={type}
        data-atomname={atomname}
      >
        {size == "s" ? (
          <div
            className={`a_atom_small ${
              isRotate(dropZone, type) ? "isRotate" : ""
            }`}
          ></div>
        ) : (
          <div className={`a_atom`}></div>
        )}
        <p aria-hidden className={`tag1 ${size == "s" ? `tag1_small` : ""}`}>
          A
        </p>
      </div>
    );
  } else if (type == 2) {
    return (
      <div
        aria-hidden
        className={`drag2 dragItem ${length == 10 ? `disabled_dnd` : ``}`}
        data-id={type}
        data-atomname={atomname}
      >
        {size == "s" ? (
          <div
            className={`t_atom_small ${
              isRotate(dropZone, type) ? "isRotate" : ""
            }`}
          ></div>
        ) : (
          <div className="t_atom"></div>
        )}
        <p aria-hidden className={`tag2 ${size == "s" ? `tag2_small` : ""}`}>
          T
        </p>
      </div>
    );
  } else if (type == 3) {
    return (
      <div
        aria-hidden
        className={`drag3 dragItem ${length == 10 ? `disabled_dnd` : ``}`}
        data-id={type}
        data-atomname={atomname}
      >
        {size == "s" ? (
          <div
            className={`g_atom_small ${
              isRotate(dropZone, type) ? "isRotate" : ""
            }`}
          ></div>
        ) : (
          <div className="g_atom"></div>
        )}
        <p aria-hidden className={`tag3 ${size == "s" ? `tag3_small` : ""}`}>
          G
        </p>
      </div>
    );
  } else if (type == 4) {
    return (
      <div
        aria-hidden
        className={`drag4 dragItem ${length == 10 ? `disabled_dnd` : ``}`}
        data-id={type}
        data-atomname={atomname}
      >
        {size == "s" ? (
          <div
            className={`c_atom_small ${
              isRotate(dropZone, type) ? "isRotate" : ""
            }`}
          ></div>
        ) : (
          <div className="c_atom"></div>
        )}
        <p aria-hidden className={`tag4 ${size == "s" ? `tag4_small` : ""}`}>
          C
        </p>
      </div>
    );
  }
};

export default NucleicAcidAtoms;
