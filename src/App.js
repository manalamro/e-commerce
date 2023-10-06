import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/home.page';
import Login from './pages/logIn/login.page';
import ItemDetails from './pages/itemDetails/itemDetails.page';
import NotFound from './pages/notFound/notFoud.page';
import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home/:id" element={<ItemDetails />} />
            <Route path="/NotFound" element={<NotFound />} />
            <Route path="/Contact"/>
          </Routes>   
          <Footer/> 
        </BrowserRouter>

    </div>
  );
}

export default App;
