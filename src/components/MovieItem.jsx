import { Link } from "react-router-dom";

import styled from 'styled-components';

// Estilizando o componente de card
const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  text-align:center;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;


const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;


export function MovieItem({ movie }) {
  return (

    <Card>
      <Title>{movie.title}</Title>
      <Link to={`/sobre/${movie.id}`}>

        <Button>
          Detalhes
        </Button>
      </Link>
    </Card>

  );
}
