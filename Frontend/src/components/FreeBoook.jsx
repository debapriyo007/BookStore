import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import axios from 'axios'




// import ListData from "../../public/list.json";


const FreeBoook = () => {

  const [book, setBook] = useState([])
  useEffect(()=>{
      const getBooks = async()=>{
        try {
         const res =  await axios.get('http://localhost:8000/v1/books')
         console.log(res.data.data)
         setBook(res.data.data.filter((items) => items.price === 0))
        } catch (error) {
          console.log(`Thre are some issue to fetch the books! ERROR: ${error}`)
        }
      };
      getBooks();
  },[])
  // const freeBooks = ListData.filter((items) => items.price === 0);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // console.log(freeBooks);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-center ">
            Offer <span className="text-pink-500">Free Books .</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            quis est veniam temporibus molestias ratione nihil debitis
            reprehenderit, aspernatur ut? Obcaecati? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tenetur non fugiat ducimus distinctio,
            commodi blanditiis quibusdam. Eaque enim non placeat illo.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((items)=>(
              <Cards key={items.id} item={items}/>
            
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBoook;
