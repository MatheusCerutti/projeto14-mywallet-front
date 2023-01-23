import Login from "./Login";
import Cadastro from "./Cadastro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Novaentrada from "./Novaentrada"
import Novasaida from "./Novasaida"
import Authcontext from "./context/Authcontext";
import { useState } from "react";


export default function App() {
  const [imagem,SetImagem] = useState("")
  const [idusuario,SetId] = useState("")
  const [token,SetToken] = useState("")
  const palavra = "batata"
  return (
    <Authcontext.Provider value={{token,SetToken,imagem,SetImagem,idusuario,SetId}}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastro" element={<Cadastro />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/nova-entrada" element={<Novaentrada />}></Route>
            <Route path="/nova-saida" element={<Novasaida />}></Route>
          </Routes>

        </div>
      </BrowserRouter>
    </Authcontext.Provider>
  );
}
