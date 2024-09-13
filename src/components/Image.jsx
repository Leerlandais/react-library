
import PropTypes from "prop-types";

export default function Image({ src, alt, className, ...rest }) {
    return <img src={src} alt={alt} className={className} {...rest} />;
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};
