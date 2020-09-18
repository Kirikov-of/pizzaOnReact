import React from "react";
import classNames from "classnames";

function Button({ onClick, className, children }) {
  return (
    <button onClick={onClick} className={classNames(className)}>
      {children}
    </button>
  );
}

export default Button;
