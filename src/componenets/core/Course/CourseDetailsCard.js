 import React from 'react';
 import copy from 'copy-to-clipboard';
 import { useDispatch, useSelector } from 'react-redux';
 import { toast } from 'react-hot-toast';
 import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../reducer/slices/cartSlice';
import { ACCOUNT_TYPE } from '../../../utils/constants';


function CourseDetailsCard({ course, setConfirmationModal, handleBuyCourse})  {

   const {user} =  useSelector((state) => state.profile);
    const {token} = useSelector((state) => state.auth);
    const navigate = useNavigate();
   const dispatch  = useDispatch();

  const {
     thumbnail: ThumbnailImage,
     price: CurrentPrice,

   } = course;

   const handleAddToCart = async () => {
    if(user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR){
      toast.error(" You are an instructor. You can't buy this course");
      return;

    }

     if(token){
      console.log("dispatching add to cart");

      dispatch(addToCart(course));
      return;

     }
      setConfirmationModal({
        text1: " you are not logged in",
        text2: "Please login to add this course to cart",
        btn1text:"login",
        btn2text:"cancel",
        btn1Handler: () => navigate("/login"),
        btn2Handler: () => setConfirmationModal(null),

      })


   }

    const handleShare = async () => {
      copy(window.location.href);
      toast.success("Link Copied to Clipboard");

    }


  return (
    <div>
    <img
    src={ThumbnailImage}
    alt="Course Thumbnail"
    className=' max-h-[300px] min-h-[180px] w-[400px] rounded-xl'
    />
    <div>
      Rs. {CurrentPrice}

    </div>
    <div className='flex flex-col gap-y-6'>

      <button
       className='bg-yellow-50'
      onClick={
      user && (course?.studentsEnrolled ?? []).includes(user?._id)
      ? () => navigate("/dashboard/enrolled-courses")
      : handleBuyCourse

      }>
      {
      user && (course?.studentsEnrolled ?? []).includes(user._id)
      ? "Go to Course"
      : "Buy Course"

      }

      </button>
      {
      (!(course?.studentsEnrolled ?? []).includes(user._id)) && (
        <button
        className='bg-yellow-50 w-fit text-richblack-900'

         onClick={ handleAddToCart}
        >

        Add to Cart

        </button>
      )
      }


    </div>

    <div>
      <p>
       30-Day Money-Back Guarantee
      </p>
      <p>
      This course includes:
      </p>
      <div className='flex flex-col gap-y-3'>
      {
        course?.instructions?.map((item, index) => (
        <p key={index} className='flex gap-2'>
         <span> {item}</span>

        </p>
        ))
      }

      </div>
    </div>

    <div>
      <button
      className='mx-auto flex items-center gap-2 p-6 text-yellow-50'
      onClick={handleShare}>
      Share
      </button>
    </div>

    </div>
    );
};

export default CourseDetailsCard;
