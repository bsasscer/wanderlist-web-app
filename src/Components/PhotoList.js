import React from 'react';
import PropTypes from 'prop-types';

const PhotoList = props =>

    <div className="photo-list">
        {props.results.map((result, index) =>
            <div key={index}>
                <img src={result.urls.small} key={result.id} />
                {/* <img src={result.user.profile_image.small} className="user-profile-img" />
                <p className="user-name">{result.user.name}</p>
                <span>{result.likes}</span> */}
            </div>
        )}
    </div>;

    PhotoList.propTypes = {
        results: PropTypes.array.isRequired
    }

export default PhotoList;
