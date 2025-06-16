import {gql, useApolloClient} from "@apollo/client";
import {useEffect, useState} from "react";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const client = useApolloClient();

    useEffect(() => {
       client.query({
           query: gql`
               {
                   allTweets {
                       id
                   }
               }`
       })
       .then(result => {setMovies(result.data.allTweets)});
    }, [client]);
    return (
        <div>
            {movies.map(movie => (
                <li key={movie.id}>{movie.id}</li>
            ))}
        </div>
    );
}