import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import "./App.css";
import ContrateNos from "./pages/Contrate-nos";
import QuemSomos from "./pages/Quem-somos";
import TrabalheConosco from "./pages/Trabalhe-conosco";
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="contrate-nos" element={<ContrateNos/>}/>
          <Route path="quem-somos" element={<QuemSomos/>}/>
          <Route path="trabalhe-conosco" element={<TrabalheConosco/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  );
}
