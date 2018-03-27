import React from 'react';
import Photo from './Photo';

const PhotoList = props => {

    const results = props.data;
    let photos = results.map(photo =>
        <Photo url={photo.urls.small} key={photo.id} />
    );

    return(
        <ul className="photo-list">
            {photos}
        </ul>
    );
}

export default PhotoList;
