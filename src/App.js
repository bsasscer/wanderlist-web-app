import React, { Component } from 'react';
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

    performSearch = (query = 'germany') => {
        fetch(`https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&client_id=YOUR-API-KEY`)
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
                <header className="header">
                </header>
                <SearchPhotos onSearch={this.performSearch} />
                <div className="main">
                    {
                        (this.state.loading) ? <p>Loading</p> : <PhotoList results={this.state.results} />
                    }
                </div>
            </div>
        );
    }
}

export default App;
