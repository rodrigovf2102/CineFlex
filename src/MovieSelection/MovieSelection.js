import './Style.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Movie from './Movie';

export default function MovieSelection() {

    const [movies,setMovies] = useState([]);

	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies`);
		requisicao.then(resposta => {
			setMovies(resposta.data);
		});
	}, []);

    return (
        <div className="movie-selection">
            <div>Selecione o Filme</div>
            {movies.map(
                movie=> <Link to={`/sessoes/${movie.id}`}><Movie movieid={movie.id} movieURL={movie.posterURL}/></Link>
                        )
            }
        </div>
    );
}