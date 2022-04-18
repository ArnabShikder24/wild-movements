import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckOut from "./components/CheckOut/CheckOut";
import Footer from "./components/Footer/Footer";
import FooterTop from "./components/FooterTop/FooterTop";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Services from "./components/Services/Services";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/services/service/:serviceId' element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>
          <Route path='/service/:serviceId' element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      <FooterTop></FooterTop>
      <Footer></Footer>
    </div>
  );
}

export default App;
