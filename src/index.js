import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar'
import Videolist from '/components/video_list'

const API_KEY = 'AIzaSyAu4rwuUSWunPW-zoghnFa1Hn9iOErA_hU'

// Create a new component
// This component will produce some HTML
// function() == () =>
class App extends Component {
    constructor(props) {
      super(props);

      this.state = {videos: []};

      YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
          this.setState({videos: videos});
      });
    }

    render() {
      return (
          <div>
            <SearchBar />
            <Videolist />
          </div>
      );
  }
}

// Take this component's generated HTML and
// put it on the page
// Putting the class App inside the tags instanciates the class
// into an instant
ReactDOM.render(<App />, document.querySelector('.container'));
