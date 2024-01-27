import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Admin from './pages/Admin'
import Public from './pages/Public'
import NoPages from './pages/NoPages'
import './App.css';

function App() {
  return (
 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Admin />} />
          <Route path="public" element={<Public/>} />
          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
);
}

export default App;
