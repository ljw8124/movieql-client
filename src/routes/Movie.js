import {useParams} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";

const GET_MOVIES = gql`
    query getTweets($movieId: String!) {
        allTweets(id: $movieId) {
            id
            text
        }
    }
`

export default function Movie() {
    const params = useParams();

    const { data, loading }  = useQuery(GET_MOVIES, {
        variables: {
            movieId: params.id
        },
    });

    console.log(data)

    if(loading){
        return <h1>loading....</h1>;
    }
    return <div>This is movie details</div>;
}