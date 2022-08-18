import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from  './component/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Login' element= {<Login/>} />
              <Route path='/Signup' element= {<Signup/>} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
