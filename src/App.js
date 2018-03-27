import React, { Component } from 'react';
import logo from './logo.svg';
import PhotoList from './Components/PhotoList';
import SearchPhotos from './Components/SearchPhotos';
import './App.css';


class App extends Component {

    state = {
        photos: []
    }

    componentDidMount() {
        fetch(`https://api.unsplash.com/photos/?&client_id=9fdb3a7d4e795ad5ae390a8814311bb31f8e16ebba0816b769cffb8ef2d55a88`)
        .then(response => response.json())
        .then(responseData => {
            this.setState({
                photos: responseData
            });
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }

    performSearch = (query = 'cats') => {
        fetch(`https://api.unsplash.com/photos/?&client_id=YOUR-API-KEY`)
        .then(response => response.json())
        .then(responseData => {
            this.setState({
                photos: responseData
            });
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });

    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Hello World</h1>
                </header>
                <SearchPhotos onSearch={this.performSearch} />
                <div>
                    <PhotoList photos={this.state.photos} />
                </div>
            </div>
        );
    }
}

export default App;
