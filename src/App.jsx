import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import Loading from './components/student/Loading'
import Player from './pages/student/Player'
import MyEnrollments from './pages/student/MyEnrollments'
import CourseDetails from './pages/student/CourseDetails'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from'./pages/educator/AddCourse'
import MyCourses from'./pages/educator/MyCourses'
import StudentEnrolled from './pages/educator/StudentsEnrolled'
import CoursesList from'./pages/student/CoursesList'
import Navbar from './components/student/Navbar'
const App = () => {
  const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute &&  <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CoursesList />} />
        <Route path='/course-list/:input' element={<CoursesList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        <Route path='/educator' element={<Educator />} >
        <Route path='educator'  element={<Dashboard />} />
        <Route path='add-course'  element={<AddCourse />} />
        <Route path='my-courses'  element={<MyCourses />} />
        <Route path='students-enrolled'  element={<StudentEnrolled />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App