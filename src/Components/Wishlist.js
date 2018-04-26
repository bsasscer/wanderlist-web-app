import React, { Component } from 'react';
import {
    NavLink,
    Redirect,
    Route } from 'react-router-dom';
import Likes from './Likes';
import Collections from './Collections';

class Wishlist extends Component {

    constructor() {
        super();
        this.state = {
            likedPhotos: []
        };
    }

    render() {

        return (
            <div>
                <div className="wishlist-nav">
                    <ul>
                        <li><NavLink to="/wishlist/likes">Likes</NavLink></li>
                        <li><NavLink to="/wishlist/collections">Collections</NavLink></li>
                    </ul>
                </div>
                <Route exact path="/wishlist" render={ () => <Redirect to="/wishlist/likes" /> } /> 
                <Route path="/wishlist/collections" component={Collections} />
                <Route path="/wishlist/likes" component={Likes}/>
            </div>
        );
    }
}

export default Wishlist;
