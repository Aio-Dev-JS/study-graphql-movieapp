import React from "react";
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks";

const GET_MOIVES = gql`
{
    movies {
        id
        medium_cover_image
    }
}
`;
// 쿼리 작성


export default () => {
    console.log(useQuery(GET_MOIVES))
    const { loading, error, data } = useQuery(GET_MOIVES);
    // Hooks사용
    if (loading) {
        return "loading"
    }
    if (data && data.movies) {
        return data.movies.map(m => <h1>{m.id}</h1>)
    }
};
