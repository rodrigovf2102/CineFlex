import Topo from './Topo/Topo';
import MovieSelection from './MovieSelection/MovieSelection';
import MovieSection from './MovieSection/MovieSection';
import MovieSeats from './MovieSeats/MovieSeats';
import { React, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieConfirmation from './MovieConfirmation/MovieConfirmation';


function App() {

  const [clientName, setClientName] = useState("");
  const [clientCPF,setClientCPF] = useState("");
  const [movieInfo,setMovieInfo] = useState({movieSeats:[],movieName:"",movieDate:"",movieTime:""});

  return (
    <>
      <BrowserRouter>
        <Topo />
        <Routes>
          <Route path="/" element={<MovieSelection/>}/>
          <Route path={"/sessoes/:idMovie"} element={<MovieSection />}/>
          <Route path={"/assentos/:idSection"} element={<MovieSeats setClientName={setClientName} clientName={clientName}
                 setClientCPF={setClientCPF} clientCPF={clientCPF} setMovieInfo={setMovieInfo} movieInfo={movieInfo}/>}/>
          <Route path={"/sucesso"} element={<MovieConfirmation clientName={clientName} clientCPF={clientCPF} movieInfo={movieInfo}/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
