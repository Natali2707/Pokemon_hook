import styles from './styles/pokemonItem.module.css';

const PokemonItem = (props) => {
    const { name, url, pokemonDetails } = props;
    console.log(url)
    return (
        <div className={styles.pokemon}>
            <h4>{name}</h4>
            <button onClick={() => pokemonDetails(url)}>Подробнее</button>
        </div>
    );
};
export default PokemonItem;

// import styles from './styles/pokemonItem.module.css';

// const PokemonItem = (props) => {
//     const { name, url, pokemonDetails } = props;
//     return (
//         <div className={styles.pokemon}>
//             <h4>{name}</h4>
//             <button onClick={() => pokemonDetails(url)}>Подробнее</button>
//         </div>
//     );
// };
// export default PokemonItem;


// import styles from './styles/pokemonDetails.module.css';

// const PokemonDetails = (props) => {
//     const { detailsPokemon } = props;
//     const { name, sprites } = detailsPokemon;
//     return (
//         <div className={styles.descrpokemon}>
//             <div className={styles.container}>
//                 <h2>{name}</h2>
//                 <img src={`${sprites.front_shiny}`} />
//                 <img src={`${sprites.back_shiny}`} />
//             </div>
//         </div>
//     );
// };

// export default PokemonDetails;