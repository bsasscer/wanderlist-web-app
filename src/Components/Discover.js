import React, { Component } from 'react';
import * as PhotosAPI from '../PhotosAPI'
import Photo from './Photo'


class Discover extends Component {

    state = {
        query: '',
        searchResults: []
    }

    // TODO Clear results when there is no query
    handleChange(e) {
        this.setState({
            query: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.query !== '') {
            this.setState({ query: e.target.value })
            PhotosAPI.search(this.state.query)
            .then(searchResults => {
                this.setState({ searchResults: !searchResults || searchResults.error ? [] : searchResults })
            })
        } else {
            this.setState({ searchResults: [] })
        }
    }

    render() {
        let searchResults = this.state.searchResults;

        return(
            <div>
                <form className="search-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="search"
                        name="search"
                        onChange={this.handleChange.bind(this)}
                        placeholder="Search..."
                        query={this.state.query}
                    />
                    <button className="search-button" type="submit" id="submit" >Go!</button>
                </form>
                {this.state.searchResults !== undefined && (
                    <div className="photo-list">
                        {searchResults.map((photo) => (
                            <Photo
                                photo={photo}
                                key={photo.id}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default Discover;
