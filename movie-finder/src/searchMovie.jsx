import React, {useState} from "react";

const SearchMovie = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([]); 
    const searchMovies = async (e) => {
        e.preventDefault(); 
        const url = `https://api.themoviedb.org/3/search/movie?api_key=d1e6e6ef719057324e1cc71756ebd601&language=en-US&query=${query}&page=1&include_adult=false`
        try {
            const res = await fetch(url);
            const data = await res.json(); 
            setMovies(data.results); 
            console.log(movies); 
        } catch (err) {
            console.error(err); 
        }
    }
    return (
        <React.Fragment>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query" placeholder="i.e. Jurrasic Park"
                    value={query} onChange={(event) => setQuery(event.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.map(movie => (
                    <div className="card">
                        <img className="card--image"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + ' poster'}
                        />
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default SearchMovie; 