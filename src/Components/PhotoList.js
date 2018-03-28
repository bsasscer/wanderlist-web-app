import React from 'react';
import PropTypes from 'prop-types';

const PhotoList = props =>

    <ul>
        {props.results.map((result, index) =>
            <li key={index}>
                <img src={result.urls.small} key={result.id} />
            </li>
        )}
    </ul>;

    PhotoList.propTypes = {
        results: PropTypes.array.isRequired
    }

export default PhotoList;
