import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return <input onChange={ event => console.log(event.target.value)} />;
    }
    // old code passed into onChange originally
    // onInputChange(event) {
    //     console.log(event.target.value)
    //     console.log(event)
    //
    // }

}

export default SearchBar