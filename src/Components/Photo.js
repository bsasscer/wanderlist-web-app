import React from 'react';

const Photo = props => (
    <li className="photo-wrap">
        <img src={props.url} alt="" />
    </li>
);

export default Photo;
