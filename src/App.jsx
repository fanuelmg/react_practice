import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import CounterPage from "./pages/CounterPage";
// ...
<Route path="/counter" element={<CounterPage />} />;
import RegisterPage from "./pages/RegisterPage";
// ...
<Route path="/register" element={<RegisterPage />} />;
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
