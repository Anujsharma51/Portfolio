import styled from "styled-components";
import TechStack from "./TechStack";
import Proficiencies from "./Proficiencies";

const Container = styled.div`
  margin-top: 80px;

  h1 {
    margin-bottom: 5px;
    color: #5c5b5b;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
  }

  .top-section {
    padding: 15px;
  }

  .top-section > img {
    width: 150px;
    /* margin-bottom: 10px; */
    border: 3px solid white;
    border-radius: 50%;
  }

  .about {
    padding-bottom: 30px;
    border-bottom: 1px solid #d8d2d2;
  }

  p {
    font-size: 1.1em;
    font-weight: 500;
    color: #5c5b5b;
  }
`;

export default function About() {
  return (
    <Container>
      <div className="about">
        <h1>About</h1>
        <div className="top-section">
          <img src="photo.webp" alt="" />
          <p>
            A Passionate aspiring Full-Stack Web Developer skilled in MERN stack
            who loves solving problems. <br /> A Polyglot who is adept at coding
            in Javascript, Java and Python 3. <br />A dedicated team player
            enthusiastic to be part of a product-based company.
          </p>
        </div>
      </div>
      <TechStack />
      <Proficiencies />
    </Container>
  );
}
