import React from "react";
import classNames from "classnames";
import { PropTypes } from "prop-types";
import "./Image.css";

const Image = ({
  src,
  alt,
  width,
  height,
  className,
  circle,
  onClick,
  disabled,
  ...attrs
}) => {
  const classes = classNames(
    { func: onClick },
    { disabled },
    { circle },
    className
  );
  src = src || `https://via.placeholder.com/${width}x${height}`;
  return (
    <img
      {...attrs}
      className={classes}
      onClick={disabled ? null : onClick}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

Image.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  alt: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  circle: PropTypes.bool
};

Image.defaultProps = {
  className: "",
  onClick: null,
  disabled: false,
  alt: "image",
  src: "",
  width: 100,
  height: 100,
  circle: false
};

export default Image;
