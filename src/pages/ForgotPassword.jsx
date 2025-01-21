import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useState } from "react";

const ForgotPassword = () =>{

  const [emailSent, setemailSent] = useState(false)
  const [email, setemail] = useState("");

  const {loading } = useSelector((state) => state.auth);
  return (
    <div>
      {
        loading ? (
          <div> Loading ...</div>
        ) : (
          <div>
          <h1 className='text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5'>
                        {
                            !emailSent?("Reset your password"):"Check email"
                        }
                    </h1>

                    <p className='my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100'>
                        {
                            !emailSent?
                            ("Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"):(`We have sent the reset email to ${email}`)
                        }
                    </p>

                    <form>
                      {
                        !emailSent && (
                          <label>
                            <p>Email Address*</p>
                            <input required
                            type="email"
                             name="email"
                             placeholder="Enter email address"
                             value={email}
                              onChange={(e)=>setemail(e.target.value)}

                              className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none w-full"></input>

                          </label>
                        )
                      }
                      <button>
                        {
                          !emailSent ? "Reset Password":"Resend Email"
                        }
                      </button>
                    </form>


                    <div>
                      <Link to ="/login">
                       <p> Back to login
                       </p>

                    </Link>

                    </div>

          </div>
        )
      }
    </div>
  )

}
export default ForgotPassword;
