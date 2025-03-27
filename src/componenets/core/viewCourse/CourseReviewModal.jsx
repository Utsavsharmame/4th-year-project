import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import ReactStars from "react-stars"

import { createRating } from "../../../services/operations/courseDetailsAPI"
import IconBtn from "../../common/IconBtn"

const CourseReviewModal = (setReviewModal) => {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const { courseEntireData } = useSelector((state) => state.viewCourse)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    setValue("courseExerience", "")
    setValue("courseRating", 0)
  }, [])

  const ratingChanged = (newRating) => {
    setValue("courseRating", newRating)
  }

  const onSubmit = async (data) => {
    await createRating(
      {
        courseId: courseEntireData._id,

        rating: data.courseRating,

        reviews: data.courseExperience,
      },
      token
    )
    setReviewModal(false)
  }

  return (
    <div>
      <div>
        {/* Modal Heeader */}
        <div>
          <p> Add Review</p>
          <button onClick={setReviewModal(false)}>Close</button>
        </div>

        {/* Modal Body */}
        <div>
          <div>
            <img
              src={user?.image}
              alt="user Image"
              className=" aspect-square w-[50px]  rounded-full object-cover"
            />

            <div>
              <p>
                {" "}
                {user?.firstName} {user?.lastName}
              </p>
              <p> Posting Publicly</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex flex-col items-center"
          >
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <div>
              <label htmlFor="courseExperience">Add Your Experience</label>
              <textarea
                id="courseExperience"
                placeholder="Add your Experience Here"
                {...register("courseExperience", { required: true })}
                className="form-style min-h-[130px] w-full"
              />
              {errors.courseExperience && (
                <span>Please add your Experience</span>
              )}
            </div>

            {/* Cancel and  save button */}
            <div>
              <button onClick={() => setReviewModal(false)}>
                Cancel
                <IconBtn text="save" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CourseReviewModal
