import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchbar'

const API_KEY = 'AIzaSyAu4rwuUSWunPW-zoghnFa1Hn9iOErA_hU'
// Create a new component
// This component will produce some HTML
// function() == () =>
const App = () => {
    return (
        <div>
          <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and
// put it on the page
// Putting the class App inside the tags instanciates the class
// into an instant
ReactDOM.render(<App />, document.querySelector('.container'));
