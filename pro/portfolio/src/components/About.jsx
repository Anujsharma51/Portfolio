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
    <section id="about">
      <Container>
        <div className="about">
          <h1>About</h1>
          <div className="top-section">
            <img src="photo.webp" alt="" />
            <p>
              A Full Stack Developer who is dedicated and honest with his work
              and believes in hard work.<br></br> Loves to accept challenges and
              work on them with full dedication. Motivated to refine skills and
              have experience<br></br> in collaborative projects with good team
              communication.
            </p>
          </div>
        </div>
        <TechStack />
        <Proficiencies />
      </Container>
    </section>
  );
}
