import React from 'react';
import PropTypes from 'prop-types';

const PhotoList = props =>

    <div className="photo-list">
        {props.results.map((result, index) =>
            <div className="tile" key={index}>
                <div className="post-img">
                    <img src={result.urls.small} key={result.id} />
                </div>
                <div className="post-info">
                    <img src={result.user.profile_image.small} className="user-profile-img" />
                    <p className="user-name">{result.user.name}</p>
                    <span>Likes: {result.likes}</span>
                </div>
            </div>
        )}
    </div>;

    PhotoList.propTypes = {
        results: PropTypes.array.isRequired
    }

export default PhotoList;
