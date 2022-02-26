import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { MainContext } from './Context';
import YouTube from 'react-youtube';
import { BsShop } from 'react-icons/bs';

function Rand() {
    const{rand,setrand,shop,setshop,count}= useContext(MainContext);
    const [rand2,setrand2] = useState([])
    useEffect(()=>{
        randcall();
        },[])
        
        const randcall= async ()=>{
        const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data =await resp.json();
        let temp = ([data.meals[0]]);
        let temp2 = temp.map((e)=>{
            return {...e, counts:1, id:Math.floor(Math.random()*1000), price:Math.floor(Math.random()*200) }
        })
        setrand(temp2);
        }
        const add=(e)=>{
          setshop([...shop,e]);
          window.alert("Your Order has been placed...")
        }

        console.log("shop", shop)
  return (
    <div>
  
      <h2 className='featured'>Featured Meal</h2>
    {rand.map((e,idx)=>( 
      <div className="randcon" key={idx} onClick={()=>add(e)}>
      <img src={e.strMealThumb} alt="" />
      <h3>{e.strMeal} </h3> 
      <span className='ranprice'>${e.price}</span>
      <div className="youtube"> 
      <YouTube videoId= {e.strYoutube.substring(e.strYoutube.indexOf("=") + 1)} />
      </div>
      </div>
    ))}
    </div>

  )
}

export default Rand
