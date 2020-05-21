import React from "react";
import t from "prop-types";

export function Box({ title, onClick, children }) {
  return (
    <div onClick={onClick}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Box.propTypes = {
  title: t.string,
};

Box.defaultProps = {
  title: "Untitled",
};
