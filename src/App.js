import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./componenets/common/Navbar"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter ">
      <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />

      <Route
     path="signup"
     element = {
      <openRoute>
        <Signup/>
      </openRoute>

     }
     />
     <Route
     path="login"
     element={
      <openRoute>
        <Login/>
      </openRoute>

     }
     />


<Route
     path="forgot-password"
     element={
      <openRoute>
        <ForgotPassword/>
      </openRoute>

     }
     />

    </Routes>



    </div>

  )
}
export default App;
