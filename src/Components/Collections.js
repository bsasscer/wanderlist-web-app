import React, { Component } from 'react';

function Collections () {
    return (
        <div>
            <h1>Collections</h1>
            <div className="collections-grid">
                <div className="item">Some Content</div>
                <div className="item">Yeah</div>
                <div className="item">Hey Jules</div>
                <div className="item">Hello</div>
                <div className="item">The House</div>
                <div className="item">I don't know, Margot!</div>
                    {/* Cool grid showing collections here! */}
                {/* {collections.map(({ name, id }) => (
                    <li key={id}>
                        <Link to={`/collections/${id}`}>{name}</Link>
                    </li>
                ))} */}
            </div>
        </div>
    )
}

export default Collections;
