import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Legenda from "./Legenda";
import axios from "axios";
import './style.css'

export default function MovieSeats() {

    const { idSection } = useParams();
    const [sectionSeats, setSectionSeats] = useState({ id: 0 });

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`);
        requisicao.then(resposta => {
            setSectionSeats({ ...resposta.data });
        });
    }, []);

    function seatSelection(isAvailable, index) {
        if (isAvailable) {
            sectionSeats.seats[index].isAvailable = "alocado";
            setSectionSeats({ ...sectionSeats });
        }
        if (isAvailable === "alocado") {
            sectionSeats.seats[index].isAvailable = true;
            setSectionSeats({ ...sectionSeats });
        }
    }

    if (sectionSeats.id !== 0) {
        return (
            <>
                <div className="title">{"Selecione o(s) assentos(s)"} </div>
                <div className="movie-seats">
                    <div className="seats">{sectionSeats.seats.map((seat, index) =>
                        <div className={`seat ${seat.isAvailable}`}
                            onClick={() => { seatSelection(seat.isAvailable, index) }}>
                            {`${seat.name}`}
                        </div>)}
                    </div>
                </div>
                <Legenda/>
                <div className="info">
                    <div>Nome do Comprador:</div>
                    <input type="text" placeholder="Digite seu nome..."></input>
                    <div>CPF do comprador:</div>
                    <input type="text" placeholder="Digite seu CPF..."></input>
                    <div className="botao">{"Reservar assento(s)"}</div>
                </div>
                <div className='fundo'>
                    <img src={sectionSeats.movie.posterURL}/>
                    <div>
                        <div className="movie-title">{sectionSeats.movie.title}</div>
                        <div className="movie-day">{`${sectionSeats.day.weekday} - ${sectionSeats.name}`}</div>
                    </div>
                </div>
            </>
        )
    }
}