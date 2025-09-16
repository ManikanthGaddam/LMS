import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {
  const {allcourses} = useContext(AppContext)
  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam harum libero eos repudiandae non, dolorum nihil ullam. Minus repudiandae ex eius at voluptatibus error sed, delectus optio quasi officiis quaerat officia cumque praesentium! Porro natus culpa odit et? Quo, autem.</p>
      {/* course-card */}
      <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] px-4 md:px-0 md:my-16 my-10 gap-2'>
        {allcourses.slice(0,4).map((course,index)=> <CourseCard key={index} course={course}/>)}
      </div>

      <Link to={'/course-list'} onClick={()=>scrollTo(0,0)} 
      className='text-black border border-gray-500/30 px-10 py-3 rounded bg-blue-400'>Show all courses</Link>
    </div>
  )
}

export default CoursesSection