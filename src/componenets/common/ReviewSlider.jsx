import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/modules';
import {Autoplay} from 'swiper/modules'
// import 'swiper/swiper-bundle.css'; // Import Swiper styles
// import 'swiper/components/autoplay/autoplay.scss'; // Import Swiper Autoplay styles

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import ReactStars from "react-rating-stars-component" 

// Initialize Swiper core components
// SwiperCore.use([Autoplay]);

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { ratingsEndpoints } from '../../services/apis';
import {apiConnector} from "../../services/apiConnector";
import { FaStar } from "react-icons/fa"

export const ReviewSlider = () => {

    const [reviews, setReviews] = useState([]);
    const truncateWords  = 15 ;

    useEffect(()=>{
        const fetchAllReviews = async () =>{
            
            const response = await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API);
            const {data} = response ;
            console.log("response of getRewies->", data);

            if(data?.success){
                setReviews(data?.data);
                //console.log("printing reviews=>", reviews);
            }

            //console.log("printing reviews=>", reviews);
        }
        fetchAllReviews();
    }, [])

    console.log("printing reviews=>", reviews);



  return (
    <div className="text-white">
      <div className="my-[50px] flex items-center justify-center h-[184px] max-w-maxContentTab lg:max-w-maxContent">
        <Swiper
          slidesPerView={4}
          spaceBetween={25}
          //loop={true}
          //freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full"
        >
          {reviews.map((review, i) => {
            return (
              <SwiperSlide className='!w-[200px]' key={i}>
                <div className="flex  !md:w-full h-full rounded-md border-[1px] border-white items-center justify-center flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      }
                      alt=""
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                      <h2 className="text-[12px] font-medium text-richblack-500">
                        {review?.course?.courseName}
                      </h2>
                    </div>
                  </div>
                  <p className="font-medium text-richblack-25">
                    {review?.review.split(" ").length > truncateWords
                      ? `${review?.review
                          .split(" ")
                          .slice(0, truncateWords)
                          .join(" ")} ...`
                      : `${review?.review}`}
                  </p>
                  <div className="flex items-center gap-2 ">
                    <h3 className="font-semibold text-yellow-100">
                      {review.rating.toFixed(1)}
                    </h3>
                    <ReactStars
                      count={5}
                      value={review.rating}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  
  )
}
