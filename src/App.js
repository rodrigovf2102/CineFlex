import Topo from './Topo/Topo';
import MovieSelection from './MovieSelection/MovieSelection';
import MovieSection from './MovieSection/MovieSection';
import MovieSeats from './MovieSeats/MovieSeats';
import MovieRequest from './MovieRequest/MovieRequest';
import { React, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <Topo />
        <Routes>
          <Route path="/" element={<MovieSelection/>}/>
          <Route path={"/sessoes/:idMovie"} element={<MovieSection />}/>
          <Route path={"/assentos/:idSection"} element={<MovieSeats />}/>
          <Route path={"/sucesso"} element={<MovieRequest />}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
