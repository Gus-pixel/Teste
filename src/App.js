import React from "react";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";


function App() {
  const [post, setPost] = React.useState([])

  React.useEffect(() => {
    axios.get("/Json/estabelecimento.json").then((response) => {
      setPost(response.data.estabelecimentos);
    });
  }, []);

  return (
    <>
      <Navbar nomes={post} />
      <Home />
    </>
  );
}

export default App;
