import './MovieSelection.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

export default function MovieSelection({movieSelected}) {

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
            {movies.map(
                movie=> <Link to={"/sessoes/"+movie.id}><div key={movie.id} onClick={()=>movieSelected(movie.id,movie.title)} className='movies'>
                            <img src={movie.posterURL}/>
                        </div></Link>
                        )
            }
        </div>
    );
}