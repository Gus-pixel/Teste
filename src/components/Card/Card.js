import React from "react";
import axios from "axios";

import "./style.css";

export default function Card(props) {
  let produto = props.produtos.map((produtos_lista) => (
    <div data-nome = {produtos_lista.nome} className="card " style={{ width: "18rem" }}>
      <img
        src={produtos_lista.imagem}
        className="card-img-top"
        alt="..."
        style={{ borderRadius: " 5%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{produtos_lista.nome}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          R$ {produtos_lista.vr_unitario}
        </h6>
        <p className="card-text">{produtos_lista.descricao}</p>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col">{produto}</div>
      </div>
    </div>
  );
}
