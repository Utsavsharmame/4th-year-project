import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate ,  useParams } from 'react-router-dom';


const VideoDetailsSidebar = () => {

  const [ activeStatus, setActiveStatus ] = useState("");
  const [videobarActive, setVideobarActive] = useState("");
  const navigate =  useNavigate();
   const { sectionId , subsectionId } = useParams();
   const {
    courseSectionData,
   courseEntireData,

    completedLectures,
    totalNoOfLectures,
   } = useSelector((state) => state.viewCourse);



  return (
   <div>

   </div>
  );
};

export default VideoDetailsSidebar;