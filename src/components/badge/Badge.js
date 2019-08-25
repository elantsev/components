import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Badge.css";

const Badge = ({
  value,
  circle,
  className,
  inline,
  outer,
  warning,
  alert,
  success,
  info,
  ...attrs
}) => {
  const text = typeof value === "string" || value instanceof String;
  const classes = classNames(
    "badge",
    { circle },
    className,
    { inline },
    { outer },
    { text },
    { warning },
    { alert },
    { success },
    { info }
  );
  return (
    <span className={classes} {...attrs}>
      {value}
    </span>
  );
};

Badge.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  circle: PropTypes.bool,
  className: PropTypes.string,
  inline: PropTypes.bool,
  outer: PropTypes.bool,
  warning: PropTypes.bool,
  alert: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool
};
Badge.defaultProps = {
  value: "!!!",
  circle: false,
  className: "",
  inline: false,
  outer: false,
  warning: false,
  alert: false,
  success: false,
  info: false
};

export default Badge;
