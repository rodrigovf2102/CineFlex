import "./Style.css"
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router';

export default function Topo({setClientName,setClientCPF,movieInfo,setMovieInfo}) {

    const navigate = useNavigate();
    let [isHome, setIsHome] = useState("");
    let [isHomeInverse,setIsHomeInverse] = useState("");
    let url = useLocation().pathname;

    useEffect(() => {
        if (url === '/') {
            setIsHome("hidden");
            setIsHomeInverse("visible");
        }
        if (url !=='/') {
            setIsHome("visible");
            setIsHomeInverse("hidden");
        }
    }, [url])

    function zerarAssentos() {
        movieInfo.movieSeats = [];
        setClientCPF("");
        setClientName("");
        setMovieInfo({...movieInfo})
    }

    function goBack() {
        navigate(-1);
        zerarAssentos();
    }

    return (
        <div className="Topo">
            <div className={isHomeInverse}></div>
            <ion-icon class={`md hydrated ${isHome}`} name="caret-back-outline" onClick={goBack}></ion-icon>
            <div>CINEFLAX</div>
            <div></div>
        </div>
    );
}