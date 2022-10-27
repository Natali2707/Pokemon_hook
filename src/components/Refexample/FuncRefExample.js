import { useRef } from "react";

const FuncRefExample = () => {
  const element = useRef();
  
 const handleClick = () => {
    element.current.style = "color:blue";
  };
  return (
    <>
      <button onClick={handleClick}>click</button>
      <h1 ref={element}>TEXT</h1>
    </>
  );
};

export default FuncRefExample;


// import { useRef } from "react";

// const FuncRefExample = () => {
//   const element = useRef();
  

//   const backPokemons = () => {
//     if (this.state.previousUrl !== null) {
//         axios.get(`${this.state.previousUrl}`).then((response) => {
//             const nextUrl = response.data.next;
//             const previousUrl = response.data.previous;
//             const pokemons = response.data.results;
//             setDetailsPokemon( pokemons, nextUrl, previousUrl );
//         });
//     }
// }
// return (
//     <>

//      <button onClick={backPokemons}>click</button>
                  
//     </>
// )}


// export default FuncRefExample;




