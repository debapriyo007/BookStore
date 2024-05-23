import React from 'react'
import Cards from './Cards'
import ListData from '../../public/list.json'
import { Link } from 'react-router-dom'
const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
          <div className='mt-32 items-center justify-center text-center'>
            <h1 className='text-2xl font-bold md:text-4xl'>We're delighted to have <span className='text-pink-500'>you here!</span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nam blanditiis molestiae sapiente quam laboriosam vero quia doloremque accusantium, doloribus dolores.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam repudiandae fuga eum aperiam! Repudiandae quos officia quia! Ab id quis debitis?</p>
            <Link to={'/'}>
            <button  class="mt-6 btn btn-secondary">Back to Home</button>
            </Link>
          </div>
          <div className='mt-12 mb-7 grid grid-col-1 md:grid-cols-4'>
            {
              ListData.map((item)=>(
                <Cards key={item.id} item={item}/>
              ))
            }
          </div>
      </div>
    
    </>
  )
}

export default Course