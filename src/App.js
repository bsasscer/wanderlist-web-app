import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import PhotoList from './Components/PhotoList';
import Discover from './Components/Discover';
import * as PhotosAPI from './PhotosAPI';
import './App.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            photos: [],
            loading: true
        };
    }

    componentDidMount() {
        PhotosAPI.getCurated()
        .then((photos) => {
            this.setState({
                photos,
                loading: false
            });
        })
        .catch(error => this.setState({ error, loading: false }));
    }


    render() {
        console.log(this.state);
        return (
            <div className="App container">
                <Route exact path="/" render={() => (
                    <div>
                        <header>
                            <div className="overlay"></div>
                            <nav className="nav-outer">
                                <ul className="nav-inner">
                                    <li><Link to="/discover">Discover</Link></li>
                                    <li><Link to="/trips">Trips</Link></li>
                                    <li><Link to="/wishlist">Wishlist</Link></li>
                                    <li><Link to="/profile">Profile</Link></li>
                                </ul>
                            </nav>
                            <div className="splash">
                                <h1>Wanderlist</h1>
                                <h2>Your Visual Travel Planner</h2>
                            </div>
                        </header>
                        {
                            (this.state.loading) ? <p>Loading</p> : <PhotoList photos={this.state.photos} />
                        }
                    </div>
                )} />
                <Route path="/discover" render={({ history }) => (
                    <Discover
                        onSearch={(query) => {
                            this.search(query)
                            history.push('/')
                        }}
                    />
                )} />
            </div>
        );
    }
}

export default App;
