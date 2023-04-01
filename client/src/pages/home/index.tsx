import React from "react";
import { Container } from "./styles";
import { fakeData } from "../../data";

const HomePage = () => {
  return (
    <Container>
      <input type="search" />
      <ul>
        {fakeData.map((person) => (
          <li key={person.id}>
            <p>{person.id}</p>
            <p>{person.first_name}</p>
            <p>{person.last_name}</p>
            <p>{person.email}</p>
            <p>{person.gender}</p>
            <p>{person.ip_address}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default HomePage;
