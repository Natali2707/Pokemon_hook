import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';



        const url="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
// class App extends React.Component {
const App=()=>{
//  state = {
//         pokemons: null,
//         pokemonId: null,
//         detailsPokemon: null,
//     };
const [pokemons, setPokemons]=useState(null);
const [pokemonId, setPokemonId]=useState(null);
const [detailsPokemon, setDetailsPokemon]=useState(null);
const [nextUrl, setNextUrl]=useState(null);
const [previousUrl, setPreviousUrl]=useState(null);


    // componentDidMount() {
    //   axios.get(`${url}/pokemons/list.json}`)
    // .then((response) => {
    //         const nextUrl = response.data.next;
    //         const pokemons = response.data.results;
    //         this.setState({ pokemons, nextUrl });
    //     });
    // }

 

    useEffect(() => {
        axios.get(`${url}/pokemons/list.json}`)
        .then((response) => {
            const nextUrl = response.data.next;
            const pokemons = response.data.results;
            setPokemons(pokemons); // для каждого состояния у нас своя управляющая функция
            setNextUrl(nextUrl)
        });
      }, []);

    const  detPokemon = (pokemonUrl) => {
        const pokemonId = pokemons.filter((pokemon) => {
            if (pokemonUrl === pokemon.url) {
                return pokemon;
            }
            return null;
        });
        setPokemonId(pokemonId[0].url ); //сюда д попасть строка с частью урла
    };

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.pokemonId !== prevState.pokemonId) {
    //         this.fetchData(this.state.pokemonId);
    //     }
    // }

useEffect(()=>{
    if (pokemonId!==null){
        fetchData(pokemonId);
    }
},[pokemonId])

// работает как компонентвиланмаунт
useEffect(() => {
    return () => {
      console.log("отписка");
    }
  }, []);

   const fetchData = (id) => {
        axios
        .get(`${id}`)
        .then((response) => {
            const detailsPokemon = {
                name: response.data.name,
                sprites: response.data.sprites,
            };
            setDetailsPokemon(detailsPokemon);
        });
    };

    const backPokemons = () => {
        if (previousUrl !== null) {
            axios.get(`${previousUrl}`).then((response) => {
                const nextUrl = response.data.next;
                const previousUrl = response.data.previous;
                const pokemons = response.data.results;
                setPokemons(pokemons);  // здесь мы устанавливаем не setDetailsPokemon а setPokemons - потому что мы работаем с основным списком
				setNextUrl(nextUrl);
				setPreviousUrl(previousUrl);
            });
        }
    };

    const nextPokemons = () => {
        axios.get(`${nextUrl}`).then((response) => {
        // axios.get(`${nextUrl}`).then((response) => {
            const nextUrl = response.data.next;
            const previousUrl = response.data.previous;
            const pokemons = response.data.results;
            setPokemons(pokemons);  // здесь мы устанавливаем не setDetailsPokemon а setPokemons - потому что мы работаем с основным списком
			setNextUrl(nextUrl); // для каждого состояния у нас своя управляющая функция
			setPreviousUrl(previousUrl);
        });
    };

    // render() {
    //     const { pokemons, detailsPokemon } = this.state;
        if (!pokemons) {
            return <div>Загрузка</div>;
        }
        return (
            <div className='app'>
                <div className="container">
                    <PokemonList
                        pokemons={pokemons}
                        pokemonDetails={detPokemon}
                    />
                    {detailsPokemon && (
                        <PokemonDetails  detailsPokemon ={ detailsPokemon }/>
                    )}
                </div>
                <div className="btn-block">
                    <button className='btn-block_relay' onClick={backPokemons}>Back</button>
                    <button className='btn-block_relay' onClick={nextPokemons}>Next</button>
                </div>
            </div>
        );
//     }
// }
};
export default App;