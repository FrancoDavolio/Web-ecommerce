import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/InicioPages/Inicio";
import Admin from "./components/views/adminPages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/admin" element={<Admin></Admin>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
