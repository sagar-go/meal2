import React,{useEffect,useState, useContext} from 'react'
import { BsShop } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { MainContext } from './Context'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Cocktail() {
    const {categ,setcateg,alcat,setalcat,shop,setshop} = useContext(MainContext)

        const fakebeer= [{
            name:"Beer",
            img :"https://2tona.ge/wp-content/uploads/2019/11/img-05.jpg"},
            {name:"Soft Drink",
            img:"https://upload.wikimedia.org/wikipedia/commons/1/1a/Bacardibreezer.jpg"},

                {name:"Cocktail",
                img:"https://www.acouplecooks.com/wp-content/uploads/2020/05/Clover-Club-Cocktail-006.jpg"},
                {name:"Ordinary Drink",
                img:"https://images.unsplash.com/photo-1571950006418-f226dc106482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGRyaW5rfGVufDB8fDB8fA%3D%3D&w=1000&q=80"},
                {name:"Homemade Liqueur",
                img:"https://www.jimbeam.com/sites/default/files/2019-04/Jim%20Beam%20Bourbon.jpg"},
               
                ]

 const click= (e)=>{
    setcateg(e.name);
    console.log("clicked",e.name)
    setalcat(e.name);
    console.log("alcat", alcat)
 }


 var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
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
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
        <h2 className='featured'>Who doesn't like Drinks ?</h2>
         <div className="beercon"> 
    <Slider {...settings}>
       {fakebeer.map((e,idx)=>( 
       <div className="beercon" key={idx} > 
            <Link className='linkins'  to={{pathname: '/result1'}}>
            <img src={e.img} alt="" onClick={()=>click(e)} />  
            <h3>{e.name} </h3> 
        </Link>
         
        </div>
        ))}
           </Slider>
            
      </div>




      <div className="footer">
          <h3>Made with React Js</h3>
      </div>
      </>
  )
}

export default Cocktail
