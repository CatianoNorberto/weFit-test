import { Routes, Route } from "react-router-dom";

//rotas
import Header from "../components/Header";
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Success from '../pages/Success'

function MainRouter() {
  
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Cart />} />
      <Route path="/success" element={<Success />} />
     </Routes>
    </>
    
  );
}

export default MainRouter;