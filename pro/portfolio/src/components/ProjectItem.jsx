import styled from "styled-components";

const Cont = styled.div`
  .card {
    width: 350px;
    padding-bottom: 20px;
    margin: 20px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .main-img {
    width: 90%;
    border-radius: 3px;
    padding: 10px;
  }

  .info {
    padding: 0 15px;
    text-align: left;
    color: #3d3b3b;
    height: 140px;
  }

  .stack-imgs {
    height: 35px;
    margin-bottom: 10px;
  }

  .stack-item {
    width: 25px;
    height: 25px;
    margin: 5px;
  }

  .button-cont {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .button {
    padding: 10px 20px;
    margin: auto 10px;
    outline: none;
    background-color: white;
    border: none;
    border-radius: 5px;
    border: 1px solid #222831;
    cursor: pointer;
  }
  .preview {
    padding: 10px 20px;
    margin: auto 10px;
    outline: none;
    background-color: #222831;
    border-radius: 5px;
    /* border-radius: none; */
    color: white;
    /* border-radius: 5px; */
    border: none;
    cursor: pointer;
  }
  .button:hover {
    border: 1px solid #101216;
  }
  .preview:hover {
    background-color: #101216;
  }
`;

export default function ProjectItem({ el }) {
  return (
    <Cont>
      <div className="card">
        <img className="main-img" src={el.main} alt="" />
        <div className="info">
          <h3>{el.title}</h3>
          <p>{el.desc}</p>
        </div>
        <div className="stack-imgs">
          {el.stack.map((link) => (
            <img className="stack-item" src={link} alt="" />
          ))}
        </div>
        <div className="button-cont">
          {/* <a href={el.demo} target="_blank" rel="noreferrer">
                        <button className="button">Demo</button>
                    </a> */}
          <a href={el.github} target="_blank" rel="noreferrer">
            <button className="button">Github</button>
          </a>
          <a href={el.netlify} target="_blank" rel="noreferrer">
            <button className="preview">Preview</button>
          </a>
        </div>
      </div>
    </Cont>
  );
}
