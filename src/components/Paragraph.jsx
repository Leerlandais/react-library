import PropTypes from "prop-types";
export default function Paragraph({ className, text }) {
    return <p className={className} {...rest}>{text}</p>;
}

Paragraph.propTypes = {
    className: PropTypes.string,
    text: PropTypes.node.isRequired,
};

Paragraph.defaultProps = {
    className: "text-gray-900 text-justify",
}