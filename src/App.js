import './App.css';
import Home from './Pages/Home/Home/Home';
import { Routes, Route, } from "react-router-dom";
import FoodDetail from './Pages/Home/FoodDetail/FoodDetail';
import SignUp from './Pages/Auth/SignUp/SignUp';
import LogIn from './Pages/Auth/LogIn/LogIn';
import CheckOut from './Pages/CheckOut/CheckOut';
import PrivateRoute from './Pages/Auth/PrivateRoute/PrivateRoute';
import Placeholder from './Pages/Placeholder/Placeholder';


function App() {
  return (
    <>
      {/* <Navbar ></Navbar> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<FoodDetail />} />
        <Route path='/checkout' element={
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        } />
        <Route path='/orderComplete' element={
          <PrivateRoute>
            <Placeholder />
          </PrivateRoute>
        } />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
