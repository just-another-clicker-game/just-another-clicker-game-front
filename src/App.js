import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsContext from "./hooks/ProductsContext";
import SessionContext from "./hooks/SessionContext";
import Header from "./layout/Header";
import { useState } from "react";
import Main from "./pages/main/main";

function App() {
  const [session, setSession] = useState(null);
  const [library, setLibrary] = useState([]);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <SessionContext.Provider value={{ ...session, setSession }}>
      <ProductsContext.Provider value={{ cart, setCart, products, setProducts, library, setLibrary }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main/>}></Route>
          </Routes>
        </BrowserRouter>
      </ProductsContext.Provider>
    </SessionContext.Provider>
  );
}

export default App;
