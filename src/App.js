import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router';
import logo from './logo.svg';
import PhotoList from './Components/PhotoList';
import SearchPhotos from './Components/SearchPhotos';
import './App.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            results: [],
            loading: true
        };
    }

    componentDidMount() {
        this.performSearch();
    }

    performSearch = (query = 'balloon') => {
        fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=YOUR-API-KEY`)
        .then(response => response.json())
        .then(responseData => {
            this.setState({
                results: responseData.results,
                loading: false
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
                    <SearchPhotos onSearch={this.performSearch} />
                </header>
                <div>
                    {
                        (this.state.loading) ? <p>Loading</p> : <PhotoList results={this.state.results} />
                    }
                </div>
            </div>
        );
    }
}

export default App;
