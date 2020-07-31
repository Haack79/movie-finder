import React, {useState} from "react";

const SearchMovie = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([]); 
    const searchMovies = async (e) => {
        e.preventDefault(); 
        const url = `https://api.themoviedb.org/3/movie/550?api_key=d1e6e6ef719057324e1cc71756ebd601?language=en-US$query=${query}$page=1$
        include_adult=false`;
        try {
            const res = await fetch(url);
            const data = await res.json(); 
            setMovies(data.results); 
        } catch (err) {
            console.error(err); 
        }
    }
    return (
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query" placeholder="i.e. Jurrasic Park"
                    value={query} onChange={(event) => setQuery(event.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchMovie; 