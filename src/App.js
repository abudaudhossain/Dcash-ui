import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import NavBar from './components/Navbar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Transaction from './pages/Transaction/Transaction';
import Account from './pages/Account/Account';
import Footer from './components/Footer/Footer';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="account" element={<Account />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
