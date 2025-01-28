import "./App.css"
import { Route, Routes } from "react-router-dom"

import OpenRoute from "./componenets/core/Auth/OpenRoute"


import Navbar from "./componenets/common/Navbar"

// import Error from "./pages/Error"
import ForgotPassword from "./pages/ForgotPassword"
// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import UpdatePassword from "./pages/UpdatePassword"
import VerifyEmail from "./pages/VerifyEmail"
import About from "./pages/About"
// import { setProgress } from "./reducer/slices/loadingBarSlice";


function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter ">
      <Navbar />

      <Routes>




      <Route path="/" element={<Home />} />


        {/* Open Route - for Only Non Logged in User */}
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        <Route
          path="verify-email"
          element={
            <OpenRoute>
              < VerifyEmail />
            </OpenRoute>
          }
        />

        <Route
          path="about"
          element={
            <OpenRoute>
              < About />
            </OpenRoute>
          }
        />

      </Routes>
    </div>
  )
}
export default App
