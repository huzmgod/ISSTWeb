import './App.css';
import {Navbar,Footer} from './components'
import {Home,Profile,Item, Create,Login,Register} from './pages'
import { Routes, Route } from "react-router-dom";
import Instalaciones from './instalaciones/instalaciones';

function App() {

  return (
    <div>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instalaciones" element={<Instalaciones/>}/>
            <Route path=":item/:id" element={<Item />} />
            <Route path="/create" element={<Create /> } />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/register" element={ <Register />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
