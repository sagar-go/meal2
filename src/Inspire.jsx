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
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
        };
       
  return (
      <>
        <h2 className='featured'>Don't worry we got you covered</h2>
      
      <div className="head"> 
    {/* <h2 className='featured' >Choose</h2> */}
    <div className="container222"> 
    <Slider {...settings}>
        {inspire.map((e)=>
        ( 
                <div className="movie2" key={e.id} onClick={()=>click(e)} >
                    <img src={e.strMealThumb} alt="" />
                    <div className="catpri12ce"> 
                    <Link className='linkins'  to={{pathname: '/result'}}>
        <img src={e.strCategoryThumb} alt=""  />  
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
