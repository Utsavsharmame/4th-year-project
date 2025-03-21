import React from 'react';
import IconBtn from '../../../common/IconBtn';
import { useSelector , useDispatch} from  "react-redux";
import { toast } from 'react-hot-toast';
import {buyCourse} from "../../../../services/operations/studentsFeaturesAPI";
import {useNavigate} from "react-router-dom";


export default  function RenderTotalAmount() {


  const { total , cart }= useSelector((state) => state.cart);
  const {token} = useSelector((state) => state.auth);
  const {user} = useSelector((state) => state.profile);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleBuyCourse =  () => {
    const courses = cart.map((course) => course._id);
    console.log("Bought thse Course:" , courses);
     buyCourse(token, courses, user, navigate, dispatch);


  }
  return (
    <div className='min-w-[280px] rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-3 md:p-6 '>

        <p className='mb-1 text-sm font-medium text-richblack-300'>Total:</p>
        <p className='mb-6 text-3xl font-medium text-yellow-100 crimson'>₹ {total}</p>

        <IconBtn
            text="Buy Now"
            onclick={handleBuyCourse}
            customClasses={"flex items-center bg-yellow-50 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 w-full justify-center"}
        />

    </div>
  )
}


