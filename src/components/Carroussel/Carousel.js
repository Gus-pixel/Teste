import React from "react";
import "./style.css";

export default function Carousel(props) {
  let destaque = props.prod.map((prod_destaque, index) => {
    if (index === 0) {
      return (
        <div className="carousel-item active" data-bs-interval="2000" style={{ marginTop: "2%"}}>
          <img
            src="https://via.placeholder.com/720x200.png"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>{prod_destaque.nome}</h2>
            <p>{prod_destaque.descricao}</p>
            <h4>R$ {prod_destaque.vr_unitario}</h4>
          </div>
        </div>
      );
    } else {
      return (
        <div className="carousel-item" data-bs-interval="2000" style={{ marginTop: "2%"}}>
          <img
            src="https://via.placeholder.com/720x200.png"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>{prod_destaque.nome}</h2>
            <p>{prod_destaque.descricao}</p>
            <h4>R$ {prod_destaque.vr_unitario}</h4>
          </div>
        </div>
      );
    }
  });

  let botoes = [];
  for (let index = 0; index < props.prod.length; index++){
    if (index === 0) {
      botoes[index] = (
        <button type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
      );
    } else {
      botoes[index]= (
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={index}
          aria-label={index + 1}
        ></button>
      );
    }
  }

  return (
    <>
      <h1 style={{ color: "#F5322E" }}>
        <br/>
        <b>Destaques</b>
      </h1>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">{botoes}</div>
        <div className="carousel-inner" >{destaque}</div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
