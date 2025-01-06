/*  
<<<<<<< HEAD
<<<<<<< HEAD
# Codecraft Edtech Project
=======
#  StudyNotion Edtech Project
>>>>>>> d4869c6 (updated code with the redux tool kit an store)
=======
# Codecraft-EdTech
Full Stack EdTech platform using MERN stack
>>>>>>> 751135cacc979c8ffdbb7c75b78e66c7dbfbc596

-Full-Stack MERN Web
-Tailwind Used

Usage
To run this web on your computer, follow these steps:

Clone the repository to your local machine.

git clone https://github.com/Utsavsharmame/4th-year-project
Install the required packages. 

npm install
Start the development server:

npm run dev
Open the project in your browser at http://localhost:3000 to view your project.

-Build this project in Love Babbar's Dot Batch.

Contributing
Contributions are welcome! If you have any suggestions or find any issues, please feel free to open an issue or a pull request.

*/

/*
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
 import HighlightText from "../componenets/core/HomePage/HightlightText";
import CTAButton from "../componenets/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../componenets/core/HomePage/CodeBlocks";

import  TimelineSection  from "../componenets/core/HomePage/TimelineSection"

import  LearningLanguageSection  from "../componenets/core/HomePage/LearningLanguageSection"



const Home = () => {
  return (
    <div>
      {/* Section 1*/}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
      {/* Become a Instructor Button */}
      <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

      <div className="text-center text-4xlfont-semibold mt-7">
      Empower Your Future with
      <HighlightText  text ={ "Coding Skills"}/>
      </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

      <div className=" flex flex-row gap-7 mt-8">
      <CTAButton active={true} linkto={"/signup"}>
           Learn More
      </CTAButton>

      <CTAButton active={false} linkto={"/login"}>
         Book a Demo
      </CTAButton>

      </div>


            <div  className='mx-3 my-12 shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
            <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
             loop
             autoPlay
             >
             <source src= {Banner} type="video/mp4"/>

            </video>
            </div>
            {/* code setion 1*/}
            <div>
              <CodeBlocks
              position={"lg:flex-row"}
              heading={
                <div className="text-4xl font-semibold">
                  Unlock Your
                  <HighlightText text={"coding potentials"}/>
                  with our online
                courses.

                </div>
              }
              subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
              ctabn1={
                {
                  btnText: "try it yourself",
                  linkto: "/signup",
                  active: true
                }
              }
              ctabn2={
                {
                  btnText: "Learn more",
                  linkto: "/login",
                  active: false,
                }
              }

              codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}



              />
            </div>

             {/* code setion 2*/}
             <div>
              <CodeBlocks
              position={"lg:flex-row-reverse"}
              heading={
                <div className="text-4xl font-semibold">
                  Unlock Your
                  <HighlightText text={"coding potentials"}/>
                   {""} with our online
                courses.

                </div>
              }

              subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
              ctabn1={
                {
                  btnText: "try it yourself",
                  linkto: "/signup",
                  active: true
                }
              }
              ctabn2={
                {
                  btnText: "Learn more",
                  linkto: "/login",
                  active: false,
                }
              }

              codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}



              />
            </div>

   </div>




      {/* Section 2*/}

      <div className="bg-pure-grays-5  text-richblack-700">


      <div className="homepage_bg h-[310px]">

        <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
        <div className="h-[150px]">

        </div>
        <div className="flex flex-row gap-7 text-white">

        <CTAButton active={true} linkto={"/signin"}>

        <div className="flex items-center gap-3">
          Explore Full Catelog
          <FaArrowRight/>
        </div>

        </CTAButton>


        <CTAButton  active={false} linkto={"/signup"}>
        <div>
        Learn more

        </div>


        </CTAButton>
        </div>
        </div>



      <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center
      justify-between gap-7">
            <div className=" flex flex-row gap-5 mb-10 mt-[95px]">
            <div className=" text-4xl font-semibold w-[45%] ">

              Get the Skills you need for a
              <HighlightText text={"Job that is in demand"}/>

            </div>



            <div className="flex flex-col gap-10 w-[40%] items-start">
              <div className="text-[16px]">
                The modern CodeCraft is the dictates its own terms. Today, to be a competative
                specialist requires more than professional skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>
                  Learn more
                </div>
              </CTAButton>

            </div>

            </div>





      </div>
        </div>

      <TimelineSection />

      <LearningLanguageSection />



      </div>

      {/* Section 3*/}

      {/* Footer*/}
    </div>
  )
}

 export default Home;
*/
