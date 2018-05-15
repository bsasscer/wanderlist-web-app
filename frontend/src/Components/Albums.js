import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';
import CreateAlbum from './CreateAlbum';

function Albums(props) {
  return (
    <div>
      <CreateAlbum
        handleNameInput={props.handleNameInput}
        newAlbumSubmitHandler={props.newAlbumSubmitHandler}
        value={props.pendingAlbum}
      />
      <div className="albums-grid">
        {props.albums.map((album, index) => (
          <Album
            name={album.name}
            key={index}
            handleRemove={() => props.removeAlbum(index)}
          />
        ))}
      </div>
    </div>
  );
}

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
  newAlbumSubmitHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Albums;
