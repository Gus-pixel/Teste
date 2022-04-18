import React from "react";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  const [post, setPost] = React.useState([]);
  const [estab, setEstab] = React.useState([]);

  React.useEffect(() => {
    axios.get("/Json/estabelecimento.json").then((response) => {
      setPost(response.data.estabelecimentos);
    });
  }, []);

  let nomes = post.map((estabelecimento) => (
    estabelecimento.nome
    ))

  return (
    <>
      <Navbar nomes = {nomes}/>
      <Home />
      {/* <Route exact path="/" component={Home}/> */}
    </>
  );
}

export default App;
