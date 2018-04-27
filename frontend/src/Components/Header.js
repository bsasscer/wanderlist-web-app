import React, { Component } from 'react';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            title: 'Wanderlist',
            subtitle: 'Your Visual Travel Planner'
        };
    }

    render() {

        return (
            <header>
                <div className="overlay"></div>
                <div className="splash">
                    <h1>{this.state.title}</h1>
                    <h2>{this.state.subtitle}</h2>
                </div>
            </header>
        );
    }
}

export default Header;
