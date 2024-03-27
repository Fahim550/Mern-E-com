import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { routes } from "./components/routes/routes";
import { createContext, useEffect, useState } from "react";
export const stateContext = createContext({});
function App() {
  const [stateData, setStateData] = useState({});
  const router = createBrowserRouter([...routes]);
  useEffect(() => {
    console.log("Running when reload the page");
    const cartData = sessionStorage.getItem("cartProducts");
    if (cartData) {
      const cartDataObj = JSON.parse(cartData);
      setStateData({ ...stateData, products: [...cartDataObj] });
      console.log("cart data", cartDataObj);
    }
  }, []);
  return (
    <stateContext.Provider value={[stateData, setStateData]}>
      <RouterProvider router={router} />
    </stateContext.Provider>
  );
}

export default App;
