import {Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Notes from "./components/Notes.jsx";
import Home from "./components/Todo.jsx";
import Login from "./components/Login.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import Apiuser from "./components/Apiuser.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import FavItems from "./components/FavItems.jsx";
import Practice from "./components/Practice.jsx";
import Message from "./components/MessageCom.jsx";
import Cart from "./components/E-Commerce/Cart.jsx";
import img from './assets/logo.png'
import { PageNotFound } from "./components/PageNotFound.jsx";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
        <Route path="/Apiuser" element={<ProtectedRoute><Apiuser /></ProtectedRoute>} />
        <Route path="/Profilecard" element={<ProtectedRoute><ProfileCard title="Kitty" images={img}/></ProtectedRoute>} />
        <Route path="/Favitems" element={<ProtectedRoute><FavItems /></ProtectedRoute>} />
        {/* <Route path="/practice" element={<ProtectedRoute><Practice /></ProtectedRoute>} /> */}
        <Route path="/Message" element={<ProtectedRoute><Message /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
        </>
  );
}

export default App;
