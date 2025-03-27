import React, { useEffect, useState } from 'react';
import { IconBtn } from 'react-icons';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate ,  useParams } from 'react-router-dom';


const VideoDetailsSidebar = (setReviewModal) => {


  const [ activeStatus, setActiveStatus ] = useState("");
  const [videoBarActive, setVideoBarActive] = useState("");
  const navigate =  useNavigate();
  const location = useLocation();

   const { sectionId , subsectionId } = useParams();
   const {
    courseSectionData,
   courseEntireData,

    completedLectures,
    totalNoOfLectures
   } = useSelector((state) => state.viewCourse);

   useEffect(() => {
     const setActiveFlags = () => {
      if(!courseSectionData.length)
        return;

      const currentSectionIndex = courseSectionData.findIndex(
        (data) => data._id === sectionId
      )



      const currentSubSectionIndex = courseSectionData?.[currentSectionIndex]?.subsection.findIndex(
        (data) => data._id === subsectionId
      )


      const activeSubSectionId = courseSectionData[currentSectionIndex]?.subSection?.
      [currentSubSectionIndex]?._id;

      // set current section here
      setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);

      // seet current sub-section here
      setVideoBarActive(activeSubSectionId);

     }

     setActiveFlags();



   },[courseSectionData, courseEntireData, location.pathname])





  return (
    <>

        <div>
        {/* for buttons and headings */}

        <div>
          {/* for buttons */}
          <div>
            <div
            onClick={()=> {
              navigate("/dashboard/enrolled-courses")

            }}>
            Back

            </div>

            <div>
              <IconBtn
                text = " Add  Review"
                onClick = {() => setReviewModal(true)}

              />
            </div>
          </div>

          {/* for heading or title */}
          <div>
          <p> {courseEntireData?.courseName}</p>
          <p> {completedLectures?.length} / {totalNoOfLectures}</p>

          </div>

        </div>


        {/* for section and subsection */}
        <div>
          {
            courseSectionData.map((course, index) => (
              <div
              onClick={() => sectActiveStatus(course?._id)}
              key={index}
              >
              {/* sections */}
              <div>
                <div>
                  {course?.sectionName}
                </div>
                {/* HWW - add icon here and handle rotate 180 logic */}

                {/* subSections */}

                <div>
                {
                  activeStatus === course?._id && (
                    <div>
                      {
                        course.subSection.map((topic, index) => (
                          <div
                           className={`flex gap-5 p-5 ${
                           videoBarActive === topic._id
                           ? " bg-yellow-200 text-richblack-900"
                           : " bg-richblack-900 text-white"
                           }`}
                           key={index}
                           onClick={() => {
                            navigate(
                              `/view-course/${courseEntireData?._id}/section/${course?._id}/
                              sub-section/$(topic?._id)`

                            )
                            setVideoBarActive(topic?._id)
                           }}
                           >



                            <input
                              type='checkbox'
                              checked = { completedLectures.includes(topic?._id)}
                              onChange={() => {}}

                            />
                            <span>
                              {topic.title}
                            </span>
                          </div>
                        ))
                      }
                    </div>
                  )
                }

                </div>


              </div>


              </div>
            ))
          }
        </div>



        </div>


    </>

  );
};

export default VideoDetailsSidebar;
