import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import PhotoList from './Components/PhotoList';
import Discover from './Components/Discover';
import Albums from './Components/Albums';
import NotFound from './Components/NotFound';
import Profile from './Components/Profile';
import * as PhotosAPI from './PhotosAPI';
import './App.css';

class App extends Component {
  state = {
    photos: [],
    likedPhotos: [],
    loading: true,
    pendingAlbum: '',
    albums: [
      {
        name: 'Happy Accidents',
        photoCount: 13
      },
      {
        name: 'Furrowed',
        photoCount: 3
      },
      {
        name: 'Grizzly',
        photoCount: 4
      }
    ]
  };

  componentDidMount() {
    PhotosAPI.getCurated()
      .then(photos => {
        this.setState({
          photos,
          loading: false
        });
      })
      .catch(error => this.setState({ error, loading: false }));
  }

  handleNameInput = e => this.setState({ pendingAlbum: e.target.value });

  // TODO clear input on submit
  // TODO prevent submit when pendingAlbum is blank
  newAlbumSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      albums: [
        {
          name: this.state.pendingAlbum,
          photoCount: 0
        },
        ...this.state.albums
      ],
      pendingAlbum: ''
    });
  };

  removeAlbum = index =>
    this.setState({
      albums: [
        ...this.state.albums.slice(0, index),
        ...this.state.albums.slice(index + 1)
      ]
    });

  // TODO getTotalLikedPhotos = () =>
  getTotalAlbums = () => this.state.albums.length;

  render() {
    let likedPhotos = this.state;

    return (
      <div className="App container">
        <NavBar />
        <div className="main-content">
          <Switch>
            <Route
              exact
              path="/"
              render={({ history }) => (
                <div>
                  <Header />
                  {this.state.loading ? (
                    <p>Loading...</p>
                  ) : (
                    <PhotoList photos={this.state.photos} />
                  )}
                </div>
              )}
            />
            <Route
              path="/discover"
              render={({ history }) => (
                <Discover
                  onSearch={query => {
                    this.search(query);
                    history.push('/');
                  }}
                />
              )}
            />
            <Route path="/profile" render={({ history }) => <Profile />} />
            <Route
              path="/albums"
              render={({ history }) => (
                <Albums
                  albums={this.state.albums}
                  newAlbumSubmitHandler={this.newAlbumSubmitHandler}
                  handleNameInput={this.handleNameInput}
                  removeAlbum={this.removeAlbum}
                  value={this.state.pendingAlbum}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
