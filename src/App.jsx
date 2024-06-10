import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home"
import Produtos from "./Pages/Produtos";
import Categorias from "./Pages/Categorias";
import MeusPedidos from "./Pages/MeusPedidos";
import LoginHome from "./Pages/Login/LoginHome";
import CriarConta from "./Pages/criarConta/CriarConta";
import FormCriarConta from "./Pages/formCriarConta/FormCriarConta";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginHome />} />
            <Route path="criarConta" element={<CriarConta />} />
            <Route path="formularioCriarConta" element={<FormCriarConta />} />
            <Route path="produtos" element={<Produtos />} />
            <Route path="categorias" element={<Categorias />} />
            <Route path="meusPedidos" element={<MeusPedidos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
