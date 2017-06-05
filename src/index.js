import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import YTSearch from 'youtube-api-search';

const API_KEY ='XXX';


YTSearch({key:API_KEY, term:'Ed Sheeran'}, function(data){
  alert(data);
  console.log(data);
});
// A functional component

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector('.container'))
