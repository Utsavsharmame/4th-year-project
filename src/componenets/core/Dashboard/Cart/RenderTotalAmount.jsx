import React from 'react';
import IconBtn from '../../../common/IconBtn';
import { useSelector } from  "react-redux";



const RenderTotalAmount = () => {


  const { total , cart }= useSelector((state) => state.cart);

  const handleBuyCourse =  () => {
    const courses = cart.map((course) => course._id);
    console.log("Bought thse Course:" , courses);

    // todo: api interate -> payment gateway tak le jatei ho
  }
  return (


     <div>
      <p>
        Total:
      </p>
      <p> Rs {total}</p>

      <IconBtn
       text="Buy Now"
       onclick={handleBuyCourse}
       />
     </div>

    
  )
}

export default RenderTotalAmount;