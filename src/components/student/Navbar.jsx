import React from 'react' 
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const isCourseListPage=location.pathname.includes('/course-list')
  return (
    <div className={` flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage? 'bg-white':''} `} >
        <img src={assets.logo} alt="Logo " className='w-28 lg:w-32 cursor-pointer'  />
        <div className=' hidden md:flex items-center gap-5 text-white text-[17px]'>
          <div className='flex items-center gap-5 '>
            <button>Become Eductor </button>
            | <Link to='my-enrollments'> My Enrollments </Link>
          </div>
          <button className='bg-blue-600 text-white px-5 py-2 rounded-full'> Create Account</button>
        </div>

        {/* {for phone screne} */}
        <div className='md:hidden flex items-center gap-2 sm:gap-5 text-white'>
          <div>
            <button>Become Educator</button>
            |<Link to='/my-enrollments'> My Enrollments</Link>
          </div>
          <button><img  className='bg-white' src={assets.user_icon} alt="" /></button>
        </div>
    </div>
  ) 
}

export default Navbar