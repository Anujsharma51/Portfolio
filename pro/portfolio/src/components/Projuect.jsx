import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const Proj = styled.div`
  margin-top: 80px;
  padding-bottom: 40px;

  .items {
    margin: auto;
    padding: 10px;
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  h1 {
    margin-bottom: 5px;
    color: #5c5b5b;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
  }
`;

export default function Projects() {
  const data = [
    {
      id: 1,
      title: "Bigbasket",
      desc: "  is an Indian online grocery delivery service. The company primarily distributes groceries found in convenience stores, household essentials and food supplies to its customers.",
      demo: null,
      github:
        "https://github.com/Snehil133/BigBasketProject/tree/main/big-basket%20clone",
      main: "/lenskart.webp",
      stack: ["/html.webp", "css.webp", "javascript.webp"],
    },
    {
      id: 2,
      title: "Zoom car",
      desc: "Zoomcar, is the Largest car sharing platform, headquartered in Bangalore, India. The company was founded in 2013 by David Back and Greg Moran .",
      demo: null,
      github: "https://github.com/chaitu786/Zoom_car.Com",
      main: "/boat.webp",
      stack: ["/html.webp", "css.webp", "javascript.webp", "nodejs2.webp"],
    },
    {
      id: 3,
      title: "NDTV",
      desc: "This article is about the company. For the news channels owned by the company, see NDTV India and NDTV 24x7.",
      demo: null,
      github: "https://github.com/huzaifa621/ndtv",
      main: "/boat.webp",
      stack: [
        "/html.webp",
        "css.webp",
        "javascript.webp",
        "reactjs.webp",
        "nodejs2.webp",
      ],
    },
  ];
  return (
    <Proj>
      <h1>Projects</h1>

      <div className="items">
        {data.map((el) => (
          <div key={el.id}>
            <ProjectItem el={el}></ProjectItem>
          </div>
        ))}
      </div>
    </Proj>
  );
}
