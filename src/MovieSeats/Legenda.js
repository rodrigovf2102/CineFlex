export default function Legenda(){
    return(
        <div className="legenda">
        <div className="margin-right">
            <div className="seat alocado"></div>
            <div>Selecionado</div>
        </div>
        <div className="margin-center">
            <div className="seat"></div>
            <div>Disponível</div>
        </div>
        <div className="margin-left">
            <div className="seat false"></div>
            <div>Indisponível</div>
        </div>
    </div>
    );
}