import React,{ useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { buyCourse } from  "../services/operations/studentsFeaturesAPI";
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI";
import { setCourse } from '../reducer/slices/courseSlice';
import GetAvgRating from "../utils/avgRating";

import ConfirmationModal from "../componenets/common/ConfirmationModal";
import RatingStars from "../componenets/common/RatingStars";
import {  formatDate } from "../services/formatDate";
import CourseDetailsCard from "../componenets/core/Course/CourseDetailsCard";
// import ratingAndReviews from "../utils/constants";



import Error from "./error";






const CourseDetails = () => {

  const {user} =  useSelector((state) => state.profile);
  const {token} = useSelector((state) => state.auth);
 const {loading} = useSelector((state) => state.profile);
 const {paymentLoading} = useSelector((state) => state.course);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();

 const [courseData ,setCourseData] = useState(null);
 const [confirmationModal, setConfirmationModal] = useState(null);


 useEffect(() => {
   const getCourseFullDetails = async () => {
    try{
            const result = await fetchCourseDetails(courseId);
            setCourseData(result);
    }
    catch(error){
      console.log("Could not fetch course details");


    }
   }
    getCourseFullDetails();

 }, [courseId]);

  const [avgReviewCount, setAveragReviewCount] = useState(0);
  useEffect(() => {
    const count = GetAvgRating(courseData?.data?.courseDetails.ratingAndReiews);
    setAveragReviewCount(count);

  },[courseData]);

  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);


  useEffect(() => {
    let lectures = 0;
    courseData?.data?.courseDetails?.courseContents?.forEach((sec) => {
      lectures += sec.subSection.length ||  0;
    })
    setTotalNoOfLectures(lectures);
  }, [courseData]);

  //  to put them update

 const handleBuyCourse = () => {
  console.log(courseId);


  if (token) {
   buyCourse( token , [courseId], user, navigate, dispatch);
   return;
  }
  setConfirmationModal({
    text1: "You need to login to buy this course",
    text2: "Please login to continue",
    btn1Text:"Login",
    btn2Text:"Cancel",
    btn1Handler:() => navigate("/login"),
    btn2Handler:() => setConfirmationModal(null),


  })
 }

  if(loading | !courseData){
    return (
      <div>
        Loading
      </div>
    )
  }

  if(!courseData.success) {
    return(
      <div>
        <Error/>

      </div>
    )
  }

 const {
  _id: course_id,
  courseName,
  courseDescription,
  price,
  thumbnail,
  whatYouWillLearn,
  courseContents,
  ratingAndReviews,
  instructor,
  studentsEnrolled,
  createdAt,

} = courseData.data?.courseDetails;




/*
const {
  _id : course_id ,
  courseName ,
  courseDescription ,
  thumbnail,
  price,
  whatYouWillLearn,
  courseContent,
  ratingAndReviews,
  instructor,
  studentsEnrolled,
  createdAt
} = courseData.data?.courseDetails;
*/



  return (
    <div className='flex flex-col  items-center text-white'>
   <div className=' relative  flex flex-col justify-start'>



   <p>{ courseName} </p>
    <p>{courseDescription}</p>
    <div>
      <span>{avgReviewCount}</span>
      <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
      <span>{`(${ratingAndReviews?.length || 0} reviews)`}</span>
      <span>{`(${studentsEnrolled?.length || 0} students enrolled)`}</span>


    </div>
    <div>
      <p> Created By {`${ instructor.firstName}`}</p>
    </div>

    <div className=' flex gap-x-3'>

      <p> Created At {formatDate(createdAt)}
      </p>
      <p>
        {" "} English
      </p>
    </div>

   <div>
    <CourseDetailsCard
      course = {courseData?.data?.courseDetails}
      setConfirmationModal={setConfirmationModal}
      handleBuyCourse={handleBuyCourse}
    />

   </div>
   </div>

     {confirmationModal && <ConfirmationModal  modalData={confirmationModal} />}


    </div>
  );
};

export default CourseDetails;

// 55.55
