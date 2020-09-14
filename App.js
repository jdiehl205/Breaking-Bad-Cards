import React, {useState, useEffect} from 'react';
import './App.css';
import Search from './components/Search';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);

  const [loading, isLoading] = useState(true);

  const [style, setStyle] = useState({});
  const [value, setValue] = useState('')
    useEffect(() => {
        let getCharacters = async () => {
          let res = await fetch(`https://www.breakingbadapi.com/api/characters?name=${value}`);
          let data = await res.json();
          console.log(data)
          if(value === ''){
            setCharacters([...data]);
            isLoading(false);
          }
        }
        getCharacters()
      }, [value]);

      let filter = () => {
        let filter = characters.filter(char => {
          let regex = new RegExp(char.name, 'gi');
          let matched = value.match(regex);
          if(matched){
            return char
          }
        });
        if(filter.length >= 1){
          setCharacters([...filter]);
        }
      }
      let filterCharacters = (e) => {
      setValue(e.target.value);
    }
  return (
    <div className="App">
      <>
      <h1><span>Br</span>eaking</h1>
      <h1><span>Ba</span>d</h1>

      <Search value={filterCharacters} filter={filter}/>
      <p id="info">Hover Over The Characters To Get More Info On Them</p>
      <Characters styles={style} characters={characters} loading={loading}/>
      </>
    </div>
  );
}

export default App;
