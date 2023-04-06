import React, { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    setResults(response.data.items);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <a href={result.html_url}>{result.login}</a>
            <div className="avatar"><img src={result.avatar_url} alt={`${result.login}'s avatar`} /></div>
            </li>
                   
        ))}
      </ul>
    </div>
  );
}

export default App;
