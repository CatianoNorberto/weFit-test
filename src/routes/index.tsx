import { Routes, Route } from "react-router-dom";

//rotas
import Header from "../components/Header";
import Home from '../pages/Home'
import Cart from '../pages/Cart'

function MainRouter() {
  
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Cart />} />
     </Routes>
    </>
    
  );
}

export default MainRouter;