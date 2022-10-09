import React from "react";
import {useEffect, useState} from "react"
import {Button,  Form, Container} from "react-bootstrap";

import {useNavigate} from "react-router-dom";


const Pokemon = () => {

  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const navigateOptions = useNavigate();
  const pokeAPI = 'https://pokeapi.co/api/v2/pokemon?limit=10'

  useEffect(() => {
    const pokemonNames = async () => {
      const response = await fetch(pokeAPI);
      const data = await response.json();

      setPokemonData(data.results);
    };

    pokemonNames();
  }, []);

  const goToPokemonCard = async () =>{
    navigateOptions(`/pokemon/${pokemonName}`);
  }
  return (
    <Container>
      <h1>Selecciona un pokemon</h1>
      <Form.Select aria-label="options"     onChange={(e) => setPokemonName(e.target.value)}>
        <option value="" disabled selected>Selecciona un pokemon</option>
        {pokemonData.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>{pokemon.name}</option>
        ))}
      </Form.Select>
      <Button variant="danger" onClick={goToPokemonCard} >Ver detalle</Button>
    </Container>
  )

};

export default Pokemon