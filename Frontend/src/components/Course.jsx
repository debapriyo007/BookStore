import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import ListData from '../../public/list.json'


const Course = () => {

  const [book, setBook] = useState([])
  useEffect(()=>{
      const getBooks = async()=>{
        try {
         const res =  await axios.get('http://localhost:8000/v1/books')
         console.log(res.data.data)
         setBook(res.data.data)
        } catch (error) {
          console.log(`Thre are some issue to fetch the books! ERROR: ${error}`)
        }
      };
      getBooks();
  },[])

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
          <div className='items-center justify-center text-center'>
            <h1 className='pt-44 text-2xl font-bold md:text-4xl'>We're delighted to have <span className='text-pink-500'>you here!</span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nam blanditiis molestiae sapiente quam laboriosam vero quia doloremque accusantium, doloribus dolores.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam repudiandae fuga eum aperiam! Repudiandae quos officia quia! Ab id quis debitis?</p>
            <Link to={'/'}>
            <button  className="mt-6 btn btn-secondary">Back to Home</button>
            </Link>
          </div>
          <div className='mt-12 mb-7 grid grid-col-1 md:grid-cols-4'>
            {book.map((item)=>{
              return <Cards key={item.id} item={item}/>
            })}
          </div>
      </div>
    
    </>
  )
}

export default Course