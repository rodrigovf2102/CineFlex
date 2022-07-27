import './MovieSelection.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function MovieSelection() {

    const [movies,setMovies] = useState([]);  

	useEffect(() => {
		const requisicao = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
		requisicao.then(resposta => {
			setMovies(resposta.data);
		});
	}, []);

    return (
        <div className="movie-selection">
            <div>Selecione o Filme</div>
            {movies.map(movie=> <div key={movie.id} className='movies'><img src={movie.posterURL}/></div>)}
        </div>
    );
}