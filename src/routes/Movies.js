import {gql, useQuery} from "@apollo/client";
import {Link} from "react-router-dom";

const ALL_MOVIES = gql`
    query getTweets {
        allTweets {
            id,
            text
        }
    }
`;

export default function Movies() {
   const {data, loading, error} = useQuery(ALL_MOVIES);
   if(loading) {
       return <h1>Loading...</h1>
   }
   if(error) {
       console.error(error);
       return <h1>Something went wrong.</h1>
   }
   return (
       <ul>
           <h1>Tweet!</h1>
           {data.allTweets.map((tweet) => (
               <li key={tweet.id}>
                   <Link to={`/movies/${tweet.id}`}>{tweet.id}</Link>
               </li>
           ))}

       </ul>
   )
       ;
}