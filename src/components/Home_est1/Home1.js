import React from "react";
import axios from "axios";

import Carousel from "../Carroussel/Carousel";
import Card from "../Card/Card";

export default function Home() {
const [item, setItem] = React.useState([]);
const [dest, setDest] = React.useState([]);

  React.useEffect(() => {
    axios.get("/Json/produto.json").then((response) => {
      setItem(response.data.produtos);
    });
  }, []);

  React.useEffect(() => {
    axios.get("/Json/produto_destaque.json").then((response) => {
      setDest(response.data.destaques);
    });
  }, []);

  return (  
    <div >
      <Carousel prod = {dest}/>
      <Card produtos = {item} />
    </div>
  );
}
