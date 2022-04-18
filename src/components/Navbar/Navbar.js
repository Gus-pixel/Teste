import React from "react";

export default function Navbar(props) {
  
  let estab = props.nomes.map((estabelecimento) => (
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href={`/estabelecimentos/${estabelecimento.id_estabelecimento}`} key={estabelecimento.id_estabelecimento}>{estabelecimento.nome}</a>
    </li>
))

  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-danger ">
  <div className="container-fluid">
  <a className="navbar-brand mb-0 h1" aria-current="page" href="/">Restaurantes</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       {estab}
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-danger btn-outline-light" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
  </>
  );
}

