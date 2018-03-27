import React, { Component } from 'react';
import logo from './logo.svg';
import PhotoList from './Components/PhotoList';
import SearchPhotos from './Components/SearchPhotos';
import './App.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            photos: []
        };
    }

    componentDidMount() {
        fetch('https://api.unsplash.com/photos/?client_id=YOUR-API-KEY')
        .then(response => response.json())
        .then(responseData => {
            this.setState({ photos: responseData });
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }

    render() {
        console.log(this.state.photos);
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Hello World</h1>
            </header>
            <SearchPhotos />
            <div>
                <PhotoList data={this.state.photos} />
            </div>
          </div>
        );
    }
}

export default App;
