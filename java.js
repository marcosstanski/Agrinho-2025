import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cadastro from "./pages/cadastro";
import Produtos from "./pages/Produtos";
import Pedidos from "./pages/pedidos";

function APP(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<home />} />
                <Route path="/cadastro" element={<cadastro />} />
                <Route path="/podrutos" element={<produtos />} />
                <Route path="/pedidos" element={<pedidos />} />
            </Routes>
        </Router>
    )
}

export default APP;