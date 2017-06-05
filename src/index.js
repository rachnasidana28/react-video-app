import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import YTSearch from 'youtube-api-search';

const API_KEY ='XXX';

class App extends Component {

  constructor(props){
    super(props);

    this.state={videos:[]};

    YTSearch({key:API_KEY, term:'Ed Sheeran'}, (videos) => {
      this.setState({videos});
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }

};


ReactDOM.render(<App />, document.querySelector('.container'))
