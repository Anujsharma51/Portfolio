import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  justify-content: center;
  margin-top: -20px;

  div {
    font-size: 40px;
    font-weight: 700;

    @media only screen and (max-width: 767px) {
      font-size: 20px;
    }
  }

  .highlight {
    color: #2ffff8;
  }

  img {
    width: 180px;
    margin-bottom: 10px;
    border: 3px solid white;
    border-radius: 50%;

    @media only screen and (max-width: 767px) {
      width: 80px;
    }
  }

  .small-text {
    font-size: 30px;

    @media only screen and (max-width: 767px) {
      font-size: 17px;
    }
  }
`;
const Home = () => {
  return (
    <section id="home">
      <Container className="body">
        <img src="/photo.webp" alt="" />
        <div>
          Hey <span>👋</span> I'm{" "}
          <span className="highlight"> Anuj Sharma</span>
          <br />
          <span className="small-text"> A Full-Stack Web Developer</span>
        </div>
      </Container>
    </section>
  );
};

export default Home;
