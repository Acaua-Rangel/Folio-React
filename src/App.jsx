import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/curriculum" element={<Curriculum/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App