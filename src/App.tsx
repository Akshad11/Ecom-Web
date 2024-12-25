import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import ContactPage from './pages/Contacts';
import PageNotFound from './pages/PageNotFound';
import WishList from './pages/WishList';
import Cart from './pages/Cart';
import ItemDetails from './pages/ItemDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Wishlist" element={<WishList />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Items" element={<ItemDetails productID='' />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
