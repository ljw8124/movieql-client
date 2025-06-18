import {gql, useQuery} from "@apollo/client";

const ALL_MOVIES = gql`
    query getTweets {
        allTweets {
            id
        }
    }
`;

export default function Movies() {
   const {data, loading, error} = useQuery(ALL_MOVIES);
   if(loading) {
       return <h1>Loading...</h1>
   }
   if(error) {
       return <h1>Something went wrong.</h1>
   }
   return <ul>
       {data.allTweets.map((tweet) => <li key={tweet.id}>{tweet.id}</li>)}
   </ul>;
}