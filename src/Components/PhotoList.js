import React from 'react';
import PropTypes from 'prop-types';

const PhotoList = props =>

    <ul className="photo-list">
        {props.results.map((result, index) =>
            <li key={index}>
                <img src={result.urls.small} key={result.id} />
                {/* <img src={result.user.profile_image.small} className="user-profile-img" />
                <p className="user-name">{result.user.name}</p>
                <span>{result.likes}</span> */}
            </li>
        )}
    </ul>;

    PhotoList.propTypes = {
        results: PropTypes.array.isRequired
    }

export default PhotoList;
