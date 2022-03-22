import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ConfirmEmailComponent from './components/ConfirmEmailComponent/ConfirmEmailComponent';
import BalanceHistory from './components/BalanceHistory/BalanceHistory';
import PaymentSuccessFull from './components/PaymentSuccessFull/PaymentSuccessFull';
import PaymentUnSuccessFull from './components/PaymentUnSuccessFull/PaymentUnSuccessFull';
import SupportRequest from './components/SupportRequest/SupportRequest';
import MyAccount from './components/MyAccount/MyAccount';
import BuyPtx from './components/BuyPtx/BuyPtx';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';


function App() {
  const [footerStyle] = useState({
    smallPosition: 'absolute',
    bottom: 0,
    mediumPosition: 'static'
  })
  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/support' element={<SupportRequest />} />
        <Route path='/account' element={<MyAccount />} />
        <Route path='/buyptx' element={<BuyPtx />} />
        <Route path='/balancehistory' element={<BalanceHistory />} />
        <Route path='/forgetpassword' element={<ForgotPassword />} />
        <Route path='/success' element={<PaymentSuccessFull />} />
        <Route path='/unsuccess' element={<PaymentUnSuccessFull />} />
        <Route path='/confirmemail' element={<ConfirmEmailComponent />} />
      </Routes>
      <Footer footerStyle={footerStyle} login={true} />
    </div>
  );
}

export default App;

// Sign In and main https://premier-coin.herokuapp.com/
// Sign Up https://premier-coin.herokuapp.com/signup
// Sign In https://premier-coin.herokuapp.com/signin
// Buy Points https://premier-coin.herokuapp.com/buyptx
// Payment Successfull https://premier-coin.herokuapp.com/success
// Payment Successfull https://premier-coin.herokuapp.com/unsuccess
// Confirm Email https://premier-coin.herokuapp.com/confirmemail
// Forget Password https://premier-coin.herokuapp.com/forgetpassword
// My Account https://premier-coin.herokuapp.com/account
// Support Request https://premier-coin.herokuapp.com/support

