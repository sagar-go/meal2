import React, { useContext, useState,useEffect } from 'react'
import { MainContext } from './Context';
import Select from './Select';
import {Link,Redirect} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Inspire() {
    const{inspire,setinspire,id,setid} =useContext(MainContext);


    useEffect(()=>{
        inspcall();
        },[]);
        
        const inspcall= async ()=>{
        const resp = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data =await resp.json();
        
        setinspire([data.categories][0])
        }

        const click= (e)=>{
            setid(e.strCategory);
         
        }
        var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 3,
          initialSlide: 5,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                initialSlide: 5,
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            }
          ]
        };
       
  return (
      <>
        <h2 className='featured'>Don't worry we got you covered</h2>
      
      <div className="head"> 
    {/* <h2 className='featured' >Choose</h2> */}
    <div className="container222"> 
    <Slider {...settings}>
        {inspire.map((e,id)=>
        ( 
                <div className="movie2" key={id}  >
                    <img src={e.strMealThumb} alt="" />
                    <div className="catpri12ce"> 
                    <Link className='linkins'  to={{pathname: '/result'}}>
        <img src={e.strCategoryThumb} alt="" onClick={()=>click(e)} />  
        <h3>{e.strCategory} </h3> 
       </Link>
     </div>
                </div> 
        )) 
        }
        </Slider>
        </div>
        </div>
      </>
  )
}

export default Inspire
