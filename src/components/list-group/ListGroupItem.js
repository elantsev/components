import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./ListGroupItem.css";

const ListGroupItem = ({
  children,
  className,
  tag: Tag,
  disabled,
  active,
  ...attrs
}) => {
  const classes = classNames(
    "list-group-item",
    className,
    { disabled },
    { active }
  );

  if (attrs.href && Tag === "li") {
    Tag = "a";
  }

  return (
    <Tag className={classes} {...attrs}>
      {children}
    </Tag>
  );
};

export default ListGroupItem;

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  active: PropTypes.bool
};

ListGroupItem.defaultProps = {
  children: null,
  className: "",
  tag: "li",
  disabled: false,
  active: false
};
