import React, {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import {useParams} from "react-router-dom";
import {Button, Container, ListGroup} from "react-bootstrap";
import loading from "../assets/img/loading-bar.png"
import { useNavigate } from 'react-router-dom';

const loadingImg = loading;
const cardDefault = {

  name: "Loading",
  sprites: {front_default: loadingImg},
  types: [{
    slot: 1,
    type: {name: "Loading"}
  }],
  stats: [{
    base_stat: 0,
    stat: {name: 'Loading'}
  }, {
    base_stat: 0,
    stat: {name: 'Loading'}
  }, {
    base_stat: 0,
    stat: {name: 'Loading'}
  }, {
    base_stat: 0,
    stat: {name: 'Loading'}
  }, {
    base_stat: 0,
    stat: {name: 'Loading'}
  }]
}

const PokemonCard = () => {
  const {name} = useParams();
  const [pokemonCardData, setPokemonCardData] = useState(cardDefault)

  const navigate = useNavigate()
  useEffect(() => {
    const pokemonData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();

      setPokemonCardData(data);
    };

    pokemonData();
  }, [name]);
  console.log("data pokemon", pokemonCardData)
  return (
<Container className="contentCenter">
    <Card   bg="danger"
            key="danger"
            text= 'dark'
            style={{ width: '18rem' }}
            className="mb-2">
      <Card.Header>
        #{pokemonCardData.id}  {pokemonCardData.name}
      </Card.Header>
      <Card.Img variant="top" src={pokemonCardData.sprites.front_default} alt={pokemonCardData.name}/>
      <Card.Body>

        <Card.Title>

        </Card.Title>
        <ListGroup as="ol">
          <ListGroup.Item key={0}
                          as="li">{pokemonCardData.stats[0].stat.name}: {pokemonCardData.stats[0].base_stat}</ListGroup.Item>
          <ListGroup.Item key={1}
                          as="li">{pokemonCardData.stats[1].stat.name}: {pokemonCardData.stats[1].base_stat}</ListGroup.Item>
          <ListGroup.Item key={2}
                          as="li">{pokemonCardData.stats[2].stat.name}: {pokemonCardData.stats[2].base_stat}</ListGroup.Item>
          <ListGroup.Item key={3}
                          as="li">{pokemonCardData.stats[3].stat.name}: {pokemonCardData.stats[3].base_stat}</ListGroup.Item>
          <ListGroup.Item key={4}
                          as="li">{pokemonCardData.stats[4].stat.name}: {pokemonCardData.stats[4].base_stat}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Button onClick={() => navigate(-1)}>Volver</Button>
    </Card>
</Container>
  )
};

export default PokemonCard;