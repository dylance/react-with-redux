import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyAu4rwuUSWunPW-zoghnFa1Hn9iOErA_hU'

// Create a new component
// This component will produce some HTML
// function() == () =>
class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        videos: [],
        selectedVideo: null
      };

      this.videoSearch('surfboards');
    }



    videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
          this.setState({
            videos: videos,
            selectedVideo: videos[0]
          });
      });
    }

    render() {
      // this function can only be run once every 300 miliseconds
      const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
      return (
          <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos} />
          </div>
      );
  }
}

// Take this component's generated HTML and
// put it on the page
// Putting the class App inside the tags instanciates the class
// into an instant
ReactDOM.render(<App />, document.querySelector('.container'));
