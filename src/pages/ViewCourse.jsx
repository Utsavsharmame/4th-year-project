import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { getFullDetailsOfCourse } from "../services/operations/courseDetailsAPI";
import { setCompletedLectures, setCourseSectionData, setEntireCourseData, setTotalNoOfLectures } from "../reducer/slices/viewCourseSlice";
import VideoDetailsSidebar from "../componenets/core/ViewCourse/VideoDetailsSidebar";
import CourseReviewModal from "../componenets/core/ViewCourse/CourseReviewModal";

const ViewCourse = () =>{

    const [reviewModal, setReviewModal] = useState(false) ;
    const {courseId, sectionId, subSectionId} = useParams();

    const {token} = useSelector((state) => state.auth) ;
    const dispatch = useDispatch() ;

    useEffect(()=>{


      const setCourseSpecificDetails = async () =>{

        const courseData = await getFullDetailsOfCourse(courseId, token);
        dispatch(setCourseSectionData(courseData?.courseDetails?.courseContent) );
        dispatch(setEntireCourseData(courseData?.courseDetails));
        dispatch(setCompletedLectures(courseData?.completedVideos));

        let lectures = 0 ;
        courseData?.courseDetails?.courseContent?.forEach((sec)=> {
          lectures += sec.subSection.length ;
        })
        dispatch(setTotalNoOfLectures(lectures));
      }

      setCourseSpecificDetails();

    }, []);


    return(
    <>
      <div className="relative flex min-h-[calc(100vh-3.5rem)]">
        <VideoDetailsSidebar reviewModal={reviewModal} setReviewModal={setReviewModal} />
        <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
          <div className="mx-6">
            <Outlet />
          </div>
        </div>
      </div>
      {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
    </>
    )
}

export default ViewCourse ;
