import React, { Component } from 'react';
import {
    Route,
    Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import PhotoList from './Components/PhotoList';
import Discover from './Components/Discover';
import Wishlist from './Components/Wishlist';
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
                <NavBar />
                <Route exact path="/" render={() => (
                    <div>
                        <Header />
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
                <Route path="/wishlist" render={({ history }) => (
                    <Wishlist
                        onCreateCollection={(collection) => {
                            this.create(collection)
                            history.push('/')
                        }}
                    />
                )} />
            </div>
        );
    }
}

export default App;
