import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }
    render() {
        //this.state.term = event.target.value BAD!!!!!
        return (
            <div className="search-bar">
                <input
                    // controlled field - state controlls the input
                    value = {this.state.term}
                    // opposite from above - input changes the state
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
      this.setState({term});
      this.props.onSearchTermChange(term);

    }

}

export default SearchBar
