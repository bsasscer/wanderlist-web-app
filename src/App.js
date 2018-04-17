import React, { Component } from 'react';
// import logo from './logo.svg';
import PhotoList from './Components/PhotoList';
import Discover from './Components/Discover';
import API_KEY from './config_keys';
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
        fetch(`https://api.unsplash.com/photos/curated/?&client_id=${API_KEY}`)
        .then(response => {
          if (response.ok) {
            console.log("RESPONSE OKAY!");
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(photos => {
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
            <div className="App">
                <header>
                    <h1>Wanderlist</h1>
                    <h2>Your Visual Travel Planner</h2>
                </header>
                <Discover onSearch={this.performSearch} />
                <main>
                    {
                        (this.state.loading) ? <p>Loading</p> : <PhotoList photos={this.state.photos} />
                    }
                </main>
            </div>
        );
    }
}

export default App;
