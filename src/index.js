import React from 'react';
import ReactDOM from 'react-dom';
// Create a new component
// This component will produce some HTML
const App = () => {
    return <div>Hi!</div>;
}

// Take this component's generated HTML and
// put it on the page
// Putting the class App inside the tags instanciates the class
// into an instant
ReactDOM.render(<App />, document.querySelector('.container'));
