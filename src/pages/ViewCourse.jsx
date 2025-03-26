import React ,{useState, useEffect}from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getFullDetailsOfCourse } from '../services/operations/courseDetailsAPI';
import { setCompletedLectures, setCourseSectionData, setEntireCourseData } from '../reducer/slices/viewCourseSlice';
import { useDispatch, useSelector } from 'react-redux';




const ViewCourse = () => {
  const [reviewModal, setReviewModal] =  useState(false);
  const  {courseId} = useParams();
  const {token}= useSelector((state)=>state.auth);
  const dispatch = useDispatch();

  useEffect(()=>{
    const setCourseSpecificDetails = async()=>{
      const courseData = await getFullDetailsOfCourse(courseId, token);
      dispatch(setCourseSectionData(courseData.courseDetails.courseContents));
      dispatch(setEntireCourseData(courseData.courseDetails));
      dispatch(setCompletedLectures(courseData.completedVideos));

      let lectures = 0;
      courseData?.courseDetails?.courseContents?.forEach((sec) => {
        lectures += sec.subSection.length
      })
      dispatch(setTotalNoOfLectures(lectures));

    }
    }, []);
  


  return (
    
    <>
      <div>
        <VideoDetailsSidebar  setReviewModal={setReviewModal}/>

        <div>
          <Outlet />
        </div>
      </div>
      {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
    </>
  );
};

export default ViewCourse;