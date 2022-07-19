import { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar";

function App() {
  const [pokemonData, setPokemonData] = useState();
  const [name, setName] = useState();
  const [error, setError] = useState(false);

  const startingImage=`https://purepng.com/public/uploads/medium/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825731v7bl3.png`
  const errorImage=`https://tse4.mm.bing.net/th?id=OIP._i7QhJXRHtj7j1QD-QIArQHaFj&pid=Api`

  async function handleClick() {
    let promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(promise)
    if(promise.status === 404){
      setError(true)
    }else {
    let response = await promise.json();
      setError(false)
      setPokemonData(response);
      console.log(pokemonData);
    }
    console.log(error)
  }

  if (!pokemonData && error===false) {
    return (
      <div>
        <header>Pokemon React Website</header>
        <main className="app">
          <img
            className="starting-page"
            src={startingImage}
            alt="Who's that Pokemon?"
          />
          <button onClick={handleClick}>Get Pokemon</button>
          <SearchBar name={name} setName={setName} />
        </main>
      </div>
    );
  } else if(error===true){
    return(
      <div>
        <header>Pokemon React Website</header>
        <main className="app">
          <h1>Who's that pokemon???!!!...seriously we can't find one matching the name inputted</h1>
          <img
            className="error-page"
            src={errorImage}
            alt="Who's that Pokemon?"
          />
          <button onClick={handleClick}>Get Pokemon</button>
          <SearchBar name={name} setName={setName} />
        </main>
      </div>
    )
  }
  else{
    return (
      <div>
        <header>Pokemon React Website</header>
        <main className="app">
          <h1>{pokemonData.name}</h1>
          <img
            src={pokemonData.sprites.other.home.front_default}
            alt={pokemonData.name}
          />
          <button onClick={handleClick}>Get Pokemon</button>
          <SearchBar name={name} setName={setName} />
        </main>
      </div>
    );
  }
}

export default App;
