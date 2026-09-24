/* import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Register from "../pages/Register";
import Product from "../pages/Product";
import Login from "../pages/Login";
import HeroPage from "../pages/HeroPage";
import Header from "../components/Header";
import About from "../pages/About";
import Sidebar from "../components/sidebar";
import Category from "../pages/category";
import Layout from "../components/layout";

function ForLocation() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Header />
      )}

      {location.pathname !== "/login" && <Sidebar />}

      <Routes>
        <Route element={<Layout />}> */
{
  /*   <Route path="/" element={<Register />} /> */
}
{
  /*         <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/heropage" element={<HeroPage />} />
        <Route path="/category" element={<Category />} />
        </Route>
        
      </Routes>
    </>
  );
}
function Router() {
  return (
    <BrowserRouter>
      <ForLocation />
    </BrowserRouter>
  );
}

export default Router; */
}

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "../pages/Register";
import Product from "../pages/Product";
import Login from "../pages/Login";
import HeroPage from "../pages/HeroPage";
import About from "../pages/About";
import Category from "../pages/category";

import Layout from "../components/layout";
import GetAllCategory from "../pages/getAllCategory";
import ProductList from "../pages/ProductList";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/heropage" element={<HeroPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/all-categories" element={<GetAllCategory />} />
          <Route path="/product-list" element={<ProductList />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
