import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Style.css';

export default function MovieSection() {

    const { idMovie } = useParams();
    const [movieInfo, setMovieInfo] = useState({ id: 0 });

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idMovie}/showtimes`);
        requisicao.then(resposta => {
            setMovieInfo({ ...resposta.data });
        });
    }, []);

    if (movieInfo.id !== 0) {
        return (
            <>
                <div className='movie-section'>
                    <div className='titulo'>Selecione o horário</div>
                    <div className='sections'> {movieInfo.days.map(day =>
                        <div>
                            <div className='datas'>{`${day.weekday} `}-{` ${day.date}`}</div>
                            <div className='horarios'>{day.showtimes.map(showtime => 
                                <Link to={`/assentos/${showtime.id}`}>
                                    <div className='horario'>{showtime.name}</div>
                                </Link>)}
                            </div>
                        </div>
                                            )
                          }
                    </div>
                </div>
                <div className='fundo'>
                    <img src={movieInfo.posterURL}/>
                    <div>{movieInfo.title}</div>
                </div>
            </>
        );
    }
}