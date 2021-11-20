import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA8keFLV_vwkZL_utyd-4IF2rsxTGP-RUg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('PublicFreakouts')
  }

  videoSearch(term) {
    YouSearch({
      key: API_KEY,
      term: term
    }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(
      (term) => {this.videoSearch(term)}, 450);

    return (
      <div>
        <SearchBar 
          onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );    
  }
}

ReactDOM.render(
  <App/>, document.querySelector('.container')
);