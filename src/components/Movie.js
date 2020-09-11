import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks"
import { gql } from "apollo-boost"


const LIKE_MOVIE = gql`
mutation toggleLikeMovie($id: Int!,$isLiked:Boolean!){
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
}
`
// client 라고 반드시 알려줘야함

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${props => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;



//  a ref는 react 에서 쓰면안됨
export default ({ id, bg, isLiked }) => {
    const [toggleMovie] = useMutation(LIKE_MOVIE, { variables: { id: parseInt(id), isLiked } })
    //  toggleMovie 변수명은 상관없음, 첫번쨰 인자에 Return 하는 것임
    return (
        <Container>
            <Link to={`/${id}`}><Poster bg={bg} /></Link>
            <button onClick={toggleMovie} >{isLiked ? "Unlike" : "Like"}</button>
        </Container>

    );


}