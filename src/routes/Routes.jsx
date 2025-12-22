import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Curriculum from '../pages/Curriculum';
import Contact from '../pages/Contact';


const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/curriculum' element={<Curriculum/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default Pages;