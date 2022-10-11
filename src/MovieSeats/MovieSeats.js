import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Legenda from "./Legenda";
import axios from "axios";
import './style.css'

export default function MovieSeats({setClientName,clientName,setClientCPF,clientCPF,setMovieInfo,movieInfo}) {

    const { idSection } = useParams();
    const [sectionSeats, setSectionSeats] = useState({ id: 0 });
    const postMovieInfo = {ids:[],name:"",cpf:""};

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`);
        requisicao.then(resposta => {
            setSectionSeats({ ...resposta.data });
            
        });
    }, []);

    

    function selectedTickets(){
        for(let i=0;i<sectionSeats.seats.length;i++){
            if(sectionSeats.seats[i].isAvailable==="alocado"){
                movieInfo.movieSeats.push(sectionSeats.seats[i].name);
                postMovieInfo.ids.push(sectionSeats.seats[i].id);
            }
            postMovieInfo.name = clientName;
            postMovieInfo.cpf = clientCPF;
            movieInfo.movieName = sectionSeats.movie.title;
            movieInfo.movieDate = sectionSeats.day.date;
            movieInfo.movieTime = sectionSeats.name;
        }
        setMovieInfo({...movieInfo});
        const requisicao = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", postMovieInfo );
    }
    


    function seatSelection(isAvailable, index) {
        if (isAvailable) {
            sectionSeats.seats[index].isAvailable = "alocado";
            setSectionSeats({ ...sectionSeats });
        }
        if (isAvailable === "alocado") {
            sectionSeats.seats[index].isAvailable = true;
            setSectionSeats({ ...sectionSeats });
        }
        if(!isAvailable){
            alert("Assento nao disponível");
        }
    }

    function clientInfo(event) {
        event.preventDefault();
        
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
                <Legenda />
                <div className="info">
                    <form onSubmit={clientInfo}>
                        <div>Nome do Comprador:</div>
                        <input type="text" placeholder="Digite seu nome..." onChange={event => setClientName(event.target.value)} required/>
                        <div>CPF do comprador:</div>
                        <input type="text" placeholder="Digite seu CPF..." onChange={event => setClientCPF(event.target.value)} required/>
                        <Link to={'/sucesso'}><button onClick={selectedTickets} type="submit">{"Reservar assento(s)"}</button></Link>
                    </form>
                </div>
                <div className='fundo'>
                    <img src={sectionSeats.movie.posterURL} />
                    <div>
                        <div className="movie-title">{sectionSeats.movie.title}</div>
                        <div className="movie-day">{`${sectionSeats.day.weekday} - ${sectionSeats.name}`}</div>
                    </div>
                </div>
            </>
        )
    }
    if(sectionSeats.id===0){
        return(
            <div className="carregando">
                Carregando...
            </div>
        );
    }
}