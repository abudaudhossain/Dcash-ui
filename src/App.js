import './App.css';
import Home from './pages/Home/Home';
import NavBar from './components/Navbar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Transaction from './pages/Transaction/Transaction';
import Account from './pages/Account/Account';
import Footer from './components/Footer/Footer';
import MyTransactions from './components/Shared/MyTransactions/MyTransactions';
import Register from './components/Account/Register/Register';
import Profile from './components/Account/Profile/Profile';
import Login from './components/Account/Login/Login';

function App() {
  return (

    <div >
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path='/' element={<MyTransactions />} />
            <Route path="/transaction" element={<Transaction />} />
          </Route>

          <Route path="/account" element={<Account />} >
            <Route path='/account' element={<Profile />} />
            <Route path='/account/newAccount' element={< Register />} />
            <Route path='/account/login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
