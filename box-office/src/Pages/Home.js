import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';
// import Title from '../components/Title';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setResults(result);
    });
    // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>NO RESULT</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div Key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
  };
  return (
    <MainPageLayout>
      {/* <Title title="box office" subtitle="are u looking for ?" />, this is homeS{' '} */}
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
