import React, { Component } from 'react';

class Photo extends Component {


    render() {
        const { photo } = this.props;

        return (
            <div className="tile">
                <div className="post-img">
                    <img src={photo.urls.small} alt={photo.id} />
                </div>
                <div className="post-info">
                    <img src={photo.user.profile_image.small} className="user-profile-img" alt={photo.user.name} />
                    <span className="user-name">{photo.user.name}</span>
                    <p>Likes: {photo.likes}</p>
                </div>
            </div>
        );
    }
}

export default Photo;
