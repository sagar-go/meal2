import React, { useState,useEffect } from 'react'
import { useContext } from 'react'
import { MainContext } from './Context';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function Category() {
const {cat,setcat,setshop,shop} =useContext(MainContext);
const[sub,setsub]= useState("Indian");
const[active2, setactive2] =useState(false);
const[text,settext] = useState("Indian")

useEffect(()=>{
    catcall();
    },[sub]);
    
    const catcall= async ()=>{
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${sub}`);
    const data =await resp.json();
    let temp = [data.meals][0];
    // setcat([data.meals][0])
    let temp2 = temp.map((e)=>{
        return {...e,  counts:1, id:Math.floor(Math.random()*1000), price:Math.floor(Math.random()*200) }
    })
    setcat(temp2);
    }

    const click1=(e)=>{
        setsub(e.target.innerText);
        settext(e.target.innerText)
        // setactive2(true)
    }
    const click2=(e)=>{
      setsub(e.target.innerText);
     settext(e.target.innerText)
  }
  const click3=(e)=>{
    setsub(e.target.innerText);
   settext(e.target.innerText)
}
const click4=(e)=>{
  setsub(e.target.innerText);
 settext(e.target.innerText)
}
const click5=(e)=>{
  setsub(e.target.innerText);
 settext(e.target.innerText)
}


    const add=(e)=>{
      setshop([...shop,e]);
      window.alert("Your Order has been placed...")
    }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };

  return (
      <>
      <h2 className='featured'>Choose your pick</h2>
     
    <div className='butcontainer'>
     <button className={text==="Indian"?"active2":"catbut"} onClick={click1}>Indian</button>
    <button className={text==="Chinese"?"active2":"catbut"} onClick={click2}>Chinese</button>
    <button className={text==="Italian"?"active2":"catbut"} onClick={click3}>Italian</button>
    <button className={text==="American"?"active2":"catbut"} onClick={click4}>American</button>
    <button className={text==="French"?"active2":"catbut"} onClick={click5}>French</button>
   
    </div>

    <div className="head"> 
    {/* <h2 className='featured' >Choose</h2> */}
    <div className="container222"> 
    <Slider {...settings}>
        {cat.map((e)=>
        ( 
                <div className="movie" key={e.id} onClick={()=>add(e)} >
                    <img src={e.strMealThumb} alt="" />
                    <div className="catprice"> 
        <h3>{e.strMeal.substring(0,15)} </h3> 
        <span>${e.price}</span>
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

export default Category