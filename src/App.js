import React, { Component } from 'react';
import logo from './logo.svg';
import PhotoList from './Components/PhotoList';
import SearchPhotos from './Components/SearchPhotos';
import API_KEY from './config_keys';
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
        fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`)
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
                <header>
                    <h1>Wanderlist</h1>
                    <h2>Your Visual Travel Planner</h2>
                </header>
                <SearchPhotos onSearch={this.performSearch} />
                <main>
                    {
                        (this.state.loading) ? <p>Loading</p> : <PhotoList results={this.state.results} />
                    }
                </main>
            </div>
        );
    }
}

export default App;
