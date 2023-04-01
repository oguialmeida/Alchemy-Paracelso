import React from "react";
import { Container } from "./styles";
import { fakeData } from "../../data";

import styles from '../../../styles/Home.module.css';

const HomePage = () => {
  return (
    <body>
      <div className={styles.header}>
        <input type="search" placeholder="Pesquisar" className={styles.input} />
      </div>
      <h1 className={styles.titulo}>Usuários</h1>
      <p className={styles.pagina}>Paracelso > Usuarios</p>
      <div className={styles.container}>
        <ul>
          {fakeData.map((person) => (
            <li key={person.id} className={styles.list}>
              <div className={styles.box}>
                <div className={styles.item}>
                  <p className={styles.itemTitulo}>Nome:</p>
                  <p className={styles.dados}>{person.first_name} {person.last_name}</p>
                </div>
                <div className={styles.item}>
                  <p className={styles.itemTitulo}>Gênero:</p>
                  <p className={styles.dados}>{person.gender}</p>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.item}>
                  <p className={styles.itemTitulo}>E-mail:</p>
                  <p className={styles.dados}>{person.email}</p>
                </div>
                <div className={styles.item}>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.item}>
                  <p className={styles.itemTitulo}>Id:</p>
                  <p className={styles.dados}>{person.id}</p>
                </div>
                <div className={styles.item}>
                  <p className={styles.itemTitulo}>Ip:</p>
                  <p className={styles.dados}>{person.ip_address}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <Container>
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
      </Container> */}
    </body>
  );
};

export default HomePage;
