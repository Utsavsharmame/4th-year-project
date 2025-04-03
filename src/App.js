import "./App.css"
import { Route, Routes, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // Correct import
import { useSelector, useDispatch } from "react-redux" // Import dispatch

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
import ContactUs from "./pages/ContactUs"
import Footer from "./componenets/common/Footer"
// import { setProgress } from "./reducer/slices/loadingBarSlice";
import MyProfile from "./componenets/core/Dashboard/MyProfile"
import Dashboard from "./pages/Dashboard"
import PrivateRoute from "./componenets/core/Auth/PrivateRoute"
import Error from "./pages/error"
import Settings from "./componenets/core/Dashboard/Settings"
import EnrolledCourses from "./componenets/core/Dashboard/EnrolledCourses"
import Cart from "./componenets/core/Dashboard/Cart";
import { ACCOUNT_TYPE } from "./utils/constants"
import AddCourse from "./componenets/core/Dashboard/AddCourse"
import MyCourses from "./componenets/core/Dashboard/MyCourses"
import EditCourse from "./componenets/core/Dashboard/EditCourse"
import Catalog from "./pages/Catalog"
import CourseDetails from "./pages/CourseDetails";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails  from "./componenets/core/ViewCourse/VideoDetails";
import { Instrucutor } from "./componenets/core/Dashboard/InstructorDashboard/Instructor";




function App() {



  const dispatch = useDispatch();
  const navigate = useNavigate() ;

  const {user} = useSelector((state)=> state.profile);







  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter ">
      <Navbar />

      <Routes>




      <Route path="/" element={<Home />} />
      <Route path="catalog/:catalogName" element={<Catalog />} />
      <Route path="courses/:courseId" element={<CourseDetails />} />



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
              <VerifyEmail />
            </OpenRoute>
          }
        />

        <Route
          path="/about"
          element={
            <OpenRoute>
              < About />
            </OpenRoute>
          }
        />


         <Route
          path="/contact"
          element={
            <OpenRoute>
              < ContactUs />
            </OpenRoute>
          }
        />


        <Route element={
         <PrivateRoute>
           <Dashboard />
         </PrivateRoute>
        }
        >

         <Route path="dashboard/my-profile" element={<MyProfile/>}  />



         <Route path = "dashboard/Settings" element= {<Settings />} />





                {/* Route only for Students */}
          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
            </>
          )

          }

          {/* Route only for Instructor */}

          {
            user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>

            <Route path="/dashboard/instructor" element={<Instrucutor />} />

            <Route path="dashboard/add-course" element={<AddCourse />} />
            <Route path="dashboard/My-courses" element={<MyCourses/>} />
            <Route path = "dashboard/edit-course/:courseId" element={<EditCourse/>}/>

            </>
          )

          }







          <Route path="dashboard/settings" element={<Settings />} />
        </Route>

                 // settings folder ke ander index.js me file H


                 <Route path="/courses/:courseId" element={<CourseDetails/> } />



             <Route element = {
              <priveteRoute>
                <ViewCourse/>

              </priveteRoute>
             }>

{
              user?.accountType === ACCOUNT_TYPE.STUDENT && (
                <>
                  <Route path="/view-course/:courseId/section/:sectionId/sub-section/:subSectionId" element={<VideoDetails />} />
                </>
              )
            }

             </Route>


        <Route path="*"  element = {<Error/>} />



      </Routes>

      <Footer />
    </div>
  )
}
export default App;
