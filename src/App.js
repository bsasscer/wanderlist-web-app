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
        fetch(`https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&client_id=9fdb3a7d4e795ad5ae390a8814311bb31f8e16ebba0816b769cffb8ef2d55a88`)
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
                  <img src={logo} className="App-logo" alt="splash" />
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
