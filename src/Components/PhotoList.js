import React from 'react';
import Photo from './Photo';

function PhotoList(props) {
    const photos = props.photos;
    const photoItems = photos.map((photo) =>
        <Photo
            key={photo.id}
            photo={photo} 
        />
    )
    return (
        <div className="photo-list">
            {photoItems}
        </div>
    );
}


export default PhotoList;
