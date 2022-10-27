import styles from './styles/pokemonDetails.module.css';

const PokemonDetails = (props) => {
    const { detailsPokemon } = props;
    const { name, sprites } = detailsPokemon;
    return (
        <div className={styles.descrpokemon}>
            <div className={styles.container}>
                <h2>{name}</h2>
                <img className={styles.pic} src={sprites.front_default} alt='pika'/>
            </div>
            <div className={styles.container}>
                <h2>{name}</h2>
                <img className={styles.pic} src={sprites.back_default} alt='pika'/>
            </div>
        </div>
    );
};

export default PokemonDetails;