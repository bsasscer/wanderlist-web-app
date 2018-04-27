import React from 'react';
import PropTypes from 'prop-types';


function CreateAlbum(props) {

    return (
        <div>
            <form className="create-album" onSubmit={props.newAlbumSubmitHandler}>
                <input
                    onChange={props.handleNameInput}
                    placeholder="Create a new album"
                    value={props.pendingAlbum}/>
                <button className="create-button" type="submit">Create</button>
            </form>
        </div>
    )
}


export default CreateAlbum;
