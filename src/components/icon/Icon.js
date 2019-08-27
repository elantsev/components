import React from "react";
import classNames from "classnames";
import { PropTypes } from "prop-types";
import "./Icon.css";

const Icon = ({ name, onClick, size, className, disabled, ...attrs }) => {
  const elemSize = size ? { fontSize: `${size}rem` } : null;
  const classes = classNames(
    "fas",
    `fa-${name}`,
    { func: onClick },
    { disabled },
    className
  );
  return (
    <i
      {...attrs}
      className={classes}
      onClick={disabled ? null : onClick}
      style={elemSize}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number,
  disabled: PropTypes.bool
};

Icon.defaultProps = {
  name: "",
  className: "",
  onClick: null,
  size: null,
  disabled: false
};

export default Icon;
