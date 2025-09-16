import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';

const CourseCard = ({ course }) => {
  const { currency , calculateRating} = useContext(AppContext);

  const finalPrice = (course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2);

  return (
    <Link
    to={`/course/${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer w-64 md:w-72 transform hover:scale-105"
    >
      {/* Image Container */}
      <div className="relative w-full h-32 md:h-36 overflow-hidden rounded-t-xl">
        <img
          src={course.courseThumbnail}
          alt={course.courseTitle}
          className="w-full h-full object-cover"
        />
        {course.discount > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {course.discount}% OFF
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-1">
        {/* Title & Educator */}
        <h3 className="font-bold text-md md:text-lg text-gray-900 dark:text-gray-100 line-clamp-2">
          {course.courseTitle}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">manikanth</p>

        {/* Rating */}
        <div className="flex items-center space-x-1 mt-1">
          <p className="text-yellow-500 font-semibold text-sm">{calculateRating(course)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => ( 
              <img
                key={i}
                src={i< Math.floor(calculateRating(course)) ? assets.star : assets.star_blank}
                alt="star"
                className="w-3 h-3 md:w-4 md:h-4 mr-0.5"
              />
            ))}
          </div>
          <p className="text-gray-400 text-xs">{course.courseRatings.length}</p>
        </div>

        {/* Price */}
        <p className="mt-1 font-bold text-md md:text-lg text-gray-900 dark:text-gray-100">
          {currency}{finalPrice}
        </p>
      </div>
    </Link>


  );
};

export default CourseCard;
