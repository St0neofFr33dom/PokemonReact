import {useState} from "react"
import './App.css';
import SearchForm from "../SearchForm";

function App() {

  const [pokemonData,setPokemonData] = useState()

 async function handleClick(){
    let promise = await fetch("https://pokeapi.co/api/v2/pokemon/eevee");
    let response = await promise.json()
    setPokemonData(response)
    console.log(pokemonData)
  }

  if (!pokemonData){
    return(<body className="App">
      <header>Pokemon React Website</header>
      <main>
        <img className="starting-page"src="https://purepng.com/public/uploads/medium/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825731v7bl3.png" alt="Who's that Pokemon?"/>
        <button onClick={handleClick}>Get Pokemon</button>
      </main>
    </body>
    )
  }
  else{
  return (
    <body className="App">
      <header>Pokemon React Website</header>
      <main>
        <h1>{pokemonData.name}</h1>
        <img src={pokemonData.sprites.other.home.front_default} alt={pokemonData.name} onError="src=https://purepng.com/public/uploads/medium/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825731v7bl3.png"/>
        <button onClick={handleClick}>Get Pokemon</button>
        <SearchForm />
      </main>
    </body>
  );
}
}

export default App;
