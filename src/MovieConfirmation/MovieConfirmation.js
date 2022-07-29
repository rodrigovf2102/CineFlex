import { Link } from 'react-router-dom';
import './style.css';

export default function MovieConfirmation({ clientName, clientCPF, movieInfo }) {
    
    function zerarAssentos(){
        movieInfo.movieSeats = [];
    }
    
    return (
        <>
            <div className='centralizado'>
                <div className="titulo">Pedido feito com sucesso!</div>
            </div>
            <div className='filme-sessao'>
                <div>Filme e sessão</div>
                <div>{movieInfo.movieName}</div>
                <div>{`${movieInfo.movieDate} ${movieInfo.movieTime}`}</div>
            </div>
            <div className='ingressos'>
                <div>Ingressos</div>
                {movieInfo.movieSeats.map(seat => <div>{`Assento ${seat}`}</div>)}
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