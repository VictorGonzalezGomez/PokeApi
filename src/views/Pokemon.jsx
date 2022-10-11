import React from "react";
import {useEffect, useState} from "react"
import {Button,  Form, Container} from "react-bootstrap";

import {useNavigate} from "react-router-dom";


const Pokemon = () => {

  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [isError, setIsError] = useState(false);
  const navigateOptions = useNavigate();
  const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10'
  useEffect(() => {

    const pokemonNames = async () => {
      try {
        const response = await fetch(pokemonUrl);
        if (response.status === 200) {
          const data = await response.json();
          setPokemonData(data.results);
        } else {
          throw 'Error'
        }
      } catch (error) {
        setIsError(true)
      }
    }
    pokemonNames();

  }, [])

  const goToPokemonCard = async () =>{
    navigateOptions(`/pokemon/${pokemonName}`);
  }
  return (
    <div>
      { isError ? <h3> Error con el servidor, favor intentar mas tarde </h3> :
        <Container>
        <h1>Selecciona un pokemon</h1>
        <Form.Select aria-label="options"     onChange={(e) => setPokemonName(e.target.value)}>
        <option value="" disabled selected>Selecciona un pokemon</option>
      {pokemonData.map((pokemon, index) => (
        <option key={index} value={pokemon.name}>{pokemon.name}</option>
        ))}
        </Form.Select>
        <Button variant="danger" onClick={goToPokemonCard} >Ver detalle</Button>
        </Container> }
    </div>
  )

};

export default Pokemon