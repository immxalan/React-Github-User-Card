import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  max-width: 300px;
  align-items: center;
  background-color: white;
  margin: 20px;
  filter: drop-shadow(-20px 10px 10px darkgrey);
  border-radius: 6px;
  padding: 2%;
`;

const CardImg = styled.img`
  width: 200px;
  border-radius: 15px;
`;
const UserCard = props => {
  return (
    <CardDiv>
      <CardImg src={props.user.avatar_url} alt="img" />
      <h1>{props.user.login}</h1>
    </CardDiv>
  );
};

export default UserCard;