import React from "react";
import PropTypes from "prop-types";

export default function Heading({ level, className, text, ...rest }) {
    const Tag = `h${level}`;
    return <Tag className={className} {...rest}>{text}</Tag>;
}

Heading.defaultProps = {
    level: '1',
    className: "",
};

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
