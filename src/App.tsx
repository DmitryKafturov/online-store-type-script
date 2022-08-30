import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { DescriptionPage } from "./pages/DescriptionPage";
import { ProductPage } from "./pages/ProductPage";


const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/about" element={<DescriptionPage />} />
      </Routes>

    </>

  )

}

export default App;
