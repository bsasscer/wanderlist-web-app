import React from 'react';
import PropTypes from 'prop-types';

const PhotoList = props =>
    <ul>
        {props.photos.map((photo, index) =>
            <li key={index}>
                <img src={photo.urls.small} key={photo.id} />
            </li>
        )}
    </ul>;

    PhotoList.propTypes = {
        photos: PropTypes.array.isRequired
    }

export default PhotoList;
