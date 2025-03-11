import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { buyCourse } from  "../services/operations/studentsFeaturesAPI";


const CourseDetails = () => {

  const {user} =  useSelector((state) => state.profile);
  const {token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();



 const handleBuyCourse = () => {
  console.log(courseId);
        

  if (token) {
   buyCourse( token , [courseId], user, navigate, dispatch);
   return;
  }
 }


  return (
    <div className='flex items-center'>
      
      <button className="yellowButton" onClick={handleBuyCourse}>
                        Buy Now
                    </button>
    </div>
  );
};

export default CourseDetails;

// 55.55
