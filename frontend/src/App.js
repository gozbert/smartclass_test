import Jobs from "./components/Jobs";
import Search from "./components/Search";
import React, { useEffect, useState } from "react";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [jobs, setItems] = useState([]);
  const [filterKeywords, setfilterKeywords] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/workable/jobs`)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result.jobs);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const setSearchKeyword = (data) => {
    setfilterKeywords(data);
  };

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className="header"></div>

        <Search setSearchKeyword={setSearchKeyword} />
        
        <Jobs
          keywords={filterKeywords}
          data={jobs}
          setKeywords={addFilterKeywords}
        />
      </div>
    );
  }
}

export default App;
