import React, { Component } from 'react';
import {
    Route,
    Link,
    Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import PhotoList from './Components/PhotoList';
import Discover from './Components/Discover';
import Wishlist from './Components/Wishlist';
import NotFound from './Components/NotFound';
import * as PhotosAPI from './PhotosAPI';
import './App.css';


class App extends Component {

    state = {
        photos: [],
        likedPhotos: [],
        loading: true,
        collections: [
            {
                name: 'Happy Accidents',
                count: 13
            },
            {
                name: 'Furrowed',
                count: 3
            },
            {
                name: 'Grizzly',
                count: 4
            }
        ]
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

    // TODO getTotalLikedPhotos = () =>
    getTotalCollections = () => this.state.collections.length;




    render() {

        let likedPhotos = this.state;

        return (
            <div className="App container">
                <NavBar />
                <Switch>
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
                                history.push("/")
                            }}
                        />
                    )} />
                    <Route path="/wishlist" render={({ history }) => (
                        <Wishlist
                            onCreateCollection={(collection) => {
                                this.create(collection)
                                history.push("/")
                            }}
                        />
                    )} />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
