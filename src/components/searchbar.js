import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: 'starting value'};
    }
    render() {
        //this.state.term = event.target.value BAD!!!!!
        return (
            <div className="search-bar">
                <input
                    // controlled field - state controlls the input
                    value = {this.state.term}
                    // opposite from above - input changes the state
                    onChange={ event => this.setState({term: event.target.value})} />
                Value of the input: {this.state.term}
            </div>
        );
    }
    // old code passed into onChange originally
    // onInputChange(event) {
    //     console.log(event.target.value)
    //     console.log(event)
    //
    // }

}

export default SearchBar
