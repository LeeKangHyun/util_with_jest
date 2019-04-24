import React, { useState, useEffect } from 'react'

import useDebounce from './customHooks'

const searchCharacters = (search) => {
  const apiKey = 'f9dfb1e8d466d36c27850bedd2047687';
  return fetch(
    `https://gateway.marvel.com/v1/public/comics?apikey=${apiKey}&titleStartsWith=${search}`,
    {
      method: 'GET'
    }
  )
  .then(r => r.json())
  .then(r => r.data.results)
  .catch(error => {
    console.error(error);
    return [];
  });
}

const useDebounceComponent = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  
  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true)
      searchCharacters(debouncedSearchTerm).then(results => {
        setIsSearching(false)
        setResults(results)
      })
    } else {
      setResults([])
    }
  }, [debouncedSearchTerm])
  
  return (
    <div>
      <input
        onChange={e => setSearchTerm(e.target.value)}
      />
      
      {isSearching && <div>Searching...</div>}
      
      {results.map(result => (
        <div key={result.id}>
          <h4>{result.title}</h4>
        </div>
      ))}
    </div>
  )
}

export default useDebounceComponent
