

export default function Movie({movieid, movieURL}){

    return (
        <div key={movieid} className='movies'>
            <img src={movieURL}/>
        </div>
    )
}