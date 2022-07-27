import Topo from './Topo/Topo';
import MovieSelection from './MovieSelection/MovieSelection';
import MovieSection from './MovieSection/MovieSection';
import MovieSeats from './MovieSeats/MovieSeats';
import MovieRequest from './MovieRequest/MovieRequest';
import { React, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  const [movieInfo,setMovieInfo] = useState({ movieId:0, movieName:"",movieSectionId:0,movieSeats:""})

  function movieSelected(movieId,movieName){
    movieInfo.movieId = movieId;
    movieInfo.movieName = movieName;
    setMovieInfo([...movieInfo]);
}

  return (
    <>
      <BrowserRouter>
        <Topo />
        <Routes>
          <Route path="/" element={<MovieSelection movieSelected={movieSelected}/>}/>
          <Route path={"/sessoes/"+movieInfo.movieId} element={<MovieSection movieInfo={movieInfo} setMovieInfo={setMovieInfo} />}/>
          <Route path={"/assntos/"+movieInfo.movieSectionId} element={<MovieSeats movieInfo={movieInfo} setMovieInfo={setMovieInfo} />}/>
          <Route path={"/sucesso"} element={<MovieRequest movieInfo={movieInfo} />}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
