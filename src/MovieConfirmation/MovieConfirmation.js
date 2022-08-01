import { Link } from 'react-router-dom';
import './style.css';

export default function MovieConfirmation({ clientName,setClientName,setClientCPF, clientCPF, movieInfo, setMovieInfo}) {

    function zerarAssentos() {
        movieInfo.movieSeats = [];
        setClientCPF("");
        setClientName("");
        setMovieInfo({...movieInfo})
    }
    
    let titulo = "Pedido feito com sucesso!";
    let cortitulo = "";

    if (clientName === "") clientName = "Não informado";
    if (clientCPF === "") clientCPF = "Não informado";
    if (movieInfo.movieSeats[0] === undefined) {
        titulo = "Assentos não selecionados";
        cortitulo = "red";
    }

    return (
        <>
            <div className='centralizado'>
                <div className={`titulo ${cortitulo}`}>{titulo}</div>
            </div>
            <div className='filme-sessao'>
                <div>Filme e sessão</div>
                <div>{movieInfo.movieName}</div>
                <div>{`${movieInfo.movieDate} ${movieInfo.movieTime}`}</div>
            </div>
            <div className='ingressos'>
                <div>Ingressos</div>
                {movieInfo.movieSeats[0] !== undefined ? 
                 movieInfo.movieSeats.map(seat => <div>{`Assento ${seat}`}</div> ): <div>Assento nao selecionado</div>}
            </div>
            <div className='ingressos'>
                <div>Comprador</div>
                <div>{`Nome: ${clientName}`}</div>
                <div>{`CPF: ${clientCPF}`}</div>
            </div>
            <div className='centralizado'>
                <Link to="/"><button onClick={zerarAssentos}>Voltar para Home</button></Link>
            </div>
        </>
    )
}