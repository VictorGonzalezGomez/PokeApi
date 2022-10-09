import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../views/Home";
import Pokemon from "../views/Pokemon";
import PokemonCard from "../views/PokemonCard";

const PageContainer = () => {


  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokemon" element={<Pokemon/>}/>
        <Route path="/pokemon/:name" element={<PokemonCard/>}/>
      </Routes>
    </BrowserRouter>

  )
};

export default PageContainer;