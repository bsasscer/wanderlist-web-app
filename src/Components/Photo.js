import React, { Component } from 'react';

class Photo extends Component {


    render() {
        const { photo } = this.props;

        return (
            <div className="tile">
                <div className="post-img" style={{ backgroundImage: `url(${photo.urls.regular})`}}>
                </div>
                <span className="user-info">
                    <div className="user-img">
                        <a href={photo.user.links.html}>
                            <img src={photo.user.profile_image.medium} className="user-profile-img" alt={photo.user.name} />
                        </a>
                    </div>
                    <div>
                        <a href={photo.user.links.html}>
                            <span className="user-name">{photo.user.name}</span>
                        </a>
                    </div>
                </span>
                <div className="post-info">
                    <span>Likes: {photo.likes}</span>
                    <span>{photo.user.location}</span>
                    <span><button>Like</button></span>
                    <span>
                        <select>
                            <option value="saveIn" disabled>Save In...</option>
                            <option value="album1">Album 1</option>
                            <option value="album2">Album 2</option>
                            <option value="album3">Album 3</option>
                            <option value="album4">Album 4</option>
                        </select>
                    </span>
                </div>
            </div>
        );
    }
}


export default Photo;
