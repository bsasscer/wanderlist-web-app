import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
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
            <Router>
                <div>
                    <div className="wishlist-nav">
                        <ul>
                            <li><Link to="/likes">Likes</Link></li>
                            <li><Link to="/collections">Collections</Link></li>
                        </ul>
                    </div>
                    <Route path="/collections" component={Collections} />
                    <Route path="/likes" component={Likes}/>
                </div>
            </Router>
        );
    }
}

export default Wishlist;
