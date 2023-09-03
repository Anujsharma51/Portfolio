import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
const Nav = styled.div`
  width: 100%;
  height: 60px;

  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;

  background-color: #222831;
  color: #eeeeee;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  @media only screen and (max-width: 767px) {
    font-size: 12px;
    height: 40px;
  }

  a {
    color: inherit;
    /* text-decoration: inherit; */
    text-decoration: none !important;
  }

  a:hover {
    color: #00adb5;
    font-size: 20px;
  }

  .cont {
    display: flex;
    width: 70%;
    height: 95%;
    margin: auto;
    justify-content: space-evenly;
    align-items: center;
    font-weight: 700;

    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }

  .cont > div {
    cursor: pointer;
  }

  .cont > div:hover {
    color: #00adb5;
  }

  .cont > div:nth-of-type(1) {
    color: ${(props) => (props.selected === "Home" ? "#00adb5" : "#eeeeee")};
    /* border-bottom: ${(props) =>
      props.selected === "Home" ? "2px solid #00adb5" : "none"}; */
  }

  .cont > div:nth-of-type(2) {
    color: ${(props) => (props.selected === "About" ? "#00adb5" : "#eeeeee")};
    /* border-bottom: ${(props) =>
      props.selected === "About" ? "2px solid #00adb5" : "none"}; */
  }

  .cont > div:nth-of-type(3) {
    color: ${(props) =>
      props.selected === "Projects" ? "#00adb5" : "#eeeeee"};
    /* border-bottom: ${(props) =>
      props.selected === "Projects" ? "2px solid #00adb5" : "none"}; */
  }

  .cont > div:nth-of-type(4) {
    color: ${(props) =>
      props.selected === "Contact Me" ? "#00adb5" : "#eeeeee"};
    /* border-bottom: ${(props) =>
      props.selected === "Contact Me" ? "2px solid #00adb5" : "none"}; */
  }
`;

export default function Navbar() {
  const [selected, setSelected] = useState("Home");
  return (
    <Nav selected={selected}>
      <div className="cont">
        <div onClick={() => setSelected("Home")}>
          <Link to="home">Home</Link>
        </div>
        <div onClick={() => setSelected("About")}>
          <Link to="about">About</Link>
        </div>
        <div onClick={() => setSelected("Projects")}>
          <Link to="projects">Projects</Link>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1rXoYnO72DmBx2caNs9jaVDvVEmGp9r-i/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </Nav>
  );
}
