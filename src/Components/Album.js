import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Album(props) {

    return (
        <div className="item">
            <Link to={`/albums/${props.index}`}>{props.name}</Link>
            <div>
                <button onClick={props.handleRemove.bind(this)}>Remove</button>
            </div>
        </div>
    )
}

Album.propTypes = {
    name: PropTypes.string.isRequired,
    handleRemove: PropTypes.func.isRequired
};

export default Album;
