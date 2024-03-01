import { PropTypes } from "prop-types";

export const GifItem = ({ title, url }) => {
  
    return (
        <div className='card'>
            <img
                src={url}
                alt={title}
                width='300px'
                height='300px'
            />
            <p>{title}</p>
        </div>
    );
};

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
