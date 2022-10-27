import PokemonItem from './PokemonItem';
import styles from './styles/pokemonList.module.css';

const PokemonList = (props) => {
    const { pokemons, pokemonDetails } = props;

    const allPokemon = pokemons.map((pokemon) => (
        <PokemonItem
            key={pokemon.url}
            {...pokemon} //деструкториз-ция
            pokemonDetails={pokemonDetails}
        />
    ));
    return (
        <div className={styles.container}>
            <h1>pokemon</h1>
            <div>{allPokemon}</div>
        </div>
    );
};

export default PokemonList;